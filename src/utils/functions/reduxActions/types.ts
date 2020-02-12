export type Type = string;

export interface Action {
  type: Type;
  payload?: any;
}

export type CreateActionCallBack = undefined | (() => void);

export type HandleActionCallback<TState, TAction extends Action, TKey extends TAction['type']> = (
  state: TState,
  action: Extract<TAction, { type: TKey }>,
) => TState;

export type HandleAction<TState, TAction extends Action> = {
  [TKey in TAction['type']]?: HandleActionCallback<TState, TAction, TKey>;
};

export type ActionCreator = (...args: any[]) => Action;

export type ActionTypes<TTypeOfActions extends any> = TTypeOfActions extends ActionCreator
  ? ReturnType<TTypeOfActions>
  : TTypeOfActions extends Record<any, any>
  ? {
      [K in keyof TTypeOfActions]: ActionTypes<TTypeOfActions[K]>;
    }[keyof TTypeOfActions]
  : TTypeOfActions extends infer R
  ? never
  : never;
