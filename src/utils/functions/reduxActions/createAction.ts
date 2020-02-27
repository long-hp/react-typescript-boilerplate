import { Type, CreateActionCallBack } from './types';

export function createAction<TActionType extends Type>(type: TActionType, callback?: CreateActionCallBack): () => { type: TActionType };

export function createAction<TActionType extends Type, TCallbackParams extends object, TCallbackReturn>(
  type: TActionType,
  callback: (arg: TCallbackParams) => TCallbackReturn,
): (arg: TCallbackParams) => { type: TActionType; payload: TCallbackReturn };

export function createAction<TActionType extends Type, TCallbackParams extends any[], TCallbackReturn>(
  type: TActionType,
  callback: (...payload: TCallbackParams) => TCallbackReturn,
): (...payload: TCallbackParams) => { type: TActionType; payload: TCallbackReturn };

/**
 * @description Redux create action
 * @param type Action type
 * @param callback input `payload`
 * @example
 * ```typescript
 * const getExampleAction = createAction('type', (endpoint: string, params: ExampleParams) => ({
 *  endpoint,
 *  params
 * }));
 *
 * const getExampleEmpty = createAction('type2');
 * ```
 * @result
 * ```typescript
 *  {
 *    type: 'type',
 *    payload: {
 *      endpoint: string,
 *      params: ExampleParams
 *    }
 * }
 * ```
 */
export function createAction<TActionType extends Type, TCallbackParams extends any[], TCallbackReturn>(
  type: TActionType,
  callback: ((...payload: TCallbackParams) => TCallbackReturn) | undefined,
) {
  return (...payload: TCallbackParams) => {
    if (typeof callback !== 'function' || payload.length === 0) {
      return {
        type,
      };
    }
    return {
      type,
      payload: callback(...payload),
    };
  };
}
