import { LocationStates } from 'routes/types';

export type LiteralUnion<T extends U, U = string> = T | U;
export type Length<T extends any[]> = T['length'];
export type Push<T extends any[], E> =
  ((head: E, ...args: T) => any) extends ((head: infer Element, ...args: infer Array) => any) ? [...Array, Element] : T;
export type Head<T extends any[]> = T extends [any, ...any[]] ? T[0] : never;
export type Tail<T> = T extends [infer _I, ...(infer Rest)] ? Rest : never;
export type HasTail<T extends any[]> = T extends [] | [any] ? false : true;
export type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type UnionToTuple<T> = UnionToIntersection<T extends any ? (t: T) => T : never> extends (_: any) => infer W
  ? [...UnionToTuple<Exclude<T, W>>, W]
  : [];

export type _Recurse<T> =
  T extends { __rec: never } ? never
  : T extends { __rec: { __rec: infer U } } ? { __rec: _Recurse<U> }
  : T extends { __rec: infer U } ? U
  : T;

export type Recurse<T> =
  T extends { __rec: unknown }
    ? Recurse<_Recurse<T>>
  : T;

export type DropFromTail<T extends any[], N extends number, I extends any[] = []> = {
  0: DropFromTail<Tail<T>, N, Push<I, Head<T>>>,
  1: I
}[Length<T> extends N ? 1 : 0];


export type _Split<S extends string, D extends string, A extends any[] = []> =
   S extends `${infer T}${D}${infer U}` ? { __rec: _Split<U, D, Push<A, T>> }
    : A;
export type Split<S extends string, D extends string> = Recurse<_Split<S, D>>;


export type _CompareStringEqual<T extends string, U extends string, SplitedT extends any[] = Split<T, ''>, SplitedU extends any[] = Split<U, ''>, Temp extends any[] = [], Limit extends any[] = Push<SplitedU, 0>> =
  SplitedU extends Temp ? true
  : Temp['length'] extends Limit['length'] ? false
  : { __rec: _CompareStringEqual<T, U, SplitedT, SplitedU, Push<Temp, SplitedT[Temp['length']]>> };

export type CompareStringEqual<T extends string, U extends string> = Recurse<_CompareStringEqual<T, U>>;

export type GetRouteInConfigId<T extends string, Pattern extends any[] = UnionToTuple<keyof LocationStates>> =
  Head<Pattern> extends `/` ? GetRouteInConfigId<T, Tail<Pattern>>
    : CompareStringEqual<T, Head<Pattern>> extends true ? Head<Pattern>
    : HasTail<Pattern> extends true ? GetRouteInConfigId<T, Tail<Pattern>>
  : undefined


export type GetRouteInConfigMultiple<T extends string, Pattern extends any[] = UnionToTuple<keyof LocationStates>> =
  T extends `${Head<Pattern>}/${string}`
  ? GetRouteInConfigId<T> extends undefined ? Head<Pattern>
  : GetRouteInConfigId<T>
  : HasTail<Pattern> extends true ? GetRouteInConfigMultiple<T, Tail<Pattern>>
  : undefined;


export type GetRouteInConfigOne<T extends string, Pattern extends any[] = UnionToTuple<keyof LocationStates>> =
  T extends Head<Pattern> ? Head<Pattern>
  : T extends `${Head<Pattern>}${'?' | '#'}${any}`
  ? Head<Pattern> extends '/' ? HasTail<Pattern> extends true ? GetRouteInConfigOne<T, Tail<Pattern>>
  : undefined
  : Head<Pattern>
  :  HasTail<Pattern> extends true
  ? GetRouteInConfigOne<T, Tail<Pattern>> : undefined;

export type GetRouteInConfig<T extends string> = GetRouteInConfigMultiple<T> extends undefined ? GetRouteInConfigOne<T> : GetRouteInConfigMultiple<T>

export type GetState<T extends string> = GetRouteInConfig<T> extends keyof LocationStates ? LocationStates[GetRouteInConfig<T>] : "Can't match any route";

