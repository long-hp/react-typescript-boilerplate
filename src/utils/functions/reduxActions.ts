import { ActionTypes } from 'types/actionTypes';

type Callback<TState, TAction = any> = (state: TState, action: TAction) => TState;

interface HandleAction<TState, TAction = any> {
  [key: string]: Callback<TState, TAction>;
}

interface CreateReducerAction {
  type: ActionTypes;
  payload: any;
}

interface ActionItemType<TState, TAction = any> {
  key: ActionTypes | ActionTypes[];
  value: Callback<TState, TAction>;
}

function getReducerFromHandleActions<TState>(handleActions: ActionItemType<TState>[]) {
  return handleActions.reduce((obj: HandleAction<TState>, item: ActionItemType<TState>) => {
    if (Array.isArray(item.key)) {
      return {
        ...obj,
        ...item.key.reduce((obj, key) => {
          return {
            ...obj,
            [key]: item.value,
          };
        }, {}),
      };
    }
    return {
      ...obj,
      [item.key]: item.value,
    };
  }, {});
}

export function createAction<TCallbackParamms, TCallbackReturn>(
  type: ActionTypes,
  callback: (payload: TCallbackParamms) => TCallbackReturn,
) {
  return (payload: TCallbackParamms) => {
    return {
      type,
      payload: callback(payload),
    };
  };
}

export function createOptionalAction<TCallbackReturn>(
  type: ActionTypes,
  callback: () => TCallbackReturn,
) {
  return () => {
    return {
      type,
      payload: callback(),
    };
  };
}

export function handleAction<TState, TAction = any>(
  type: ActionTypes | ActionTypes[],
  callback: Callback<TState, TAction>,
): ActionItemType<TState, TAction> {
  return {
    key: type,
    value: callback,
  };
}

export function createReducer<TState>(
  initialState: TState,
  handleActions: ActionItemType<TState>[],
) {
  const reducer = getReducerFromHandleActions<TState>(handleActions);
  return (state = initialState, action: CreateReducerAction): TState => {
    return typeof reducer[action.type] === 'function' ? reducer[action.type](state, action) : state;
  };
}
