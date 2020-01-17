type Type = string;

interface Action {
  type: Type;
  payload?: any;
}

type CreateActionCallBack = undefined | (() => void);

type HandleActionCallback<TState, TAction extends Action, TKey extends TAction['type']> = (
  state: TState,
  action: Extract<TAction, { type: TKey }>,
) => TState;

type HandleAction<TState, TAction extends Action> = {
  [TKey in TAction['type']]?: HandleActionCallback<TState, TAction, TKey>;
};

type ActionCreator = (...args: any[]) => Action;

export type ActionTypes<TTypeOfActions extends any> = TTypeOfActions extends ActionCreator
  ? ReturnType<TTypeOfActions>
  : TTypeOfActions extends Record<any, any>
  ? {
      [K in keyof TTypeOfActions]: ActionTypes<TTypeOfActions[K]>;
    }[keyof TTypeOfActions]
  : TTypeOfActions extends infer R
  ? never
  : never;

const COMMA = ',';

/**
 * @description array `handleAction` function -> object with `key = handleAction type` and `value = handleAction callback`
 * @param handleActions array `handleAction` function
 * @example
 * ```typescript
 * const handleActions = [
 *  handleAction('foo', (state, action) => ({
 *    ...state,
 *    ...
 *  })),
 *  handleAction('bar', (state, action) => ({
 *    ...state,
 *    ...
 *  }))
 * ];
 * const obj = getObjectFromHandleActions(handleActions);
 * ```
 * @result
 * ```typescript
 * {
 *  foo: (state, action) => ({
 *    ...state,
 *    ...
 *  }),
 *  bar: (state, action) => ({
 *    ...state,
 *    ...
 *  })
 * }
 * ```
 */
function getObjectFromHandleActions<TState, TAction extends Action>(handleActions: HandleAction<TState, TAction>[]): HandleAction<TState, TAction> {
  return handleActions.reduce((acc, handleAction) => {
    const [key]: TAction['type'][] = Object.keys(handleAction);
    const [callback]: HandleActionCallback<TState, TAction, TAction['type']>[] = Object.values(handleAction);
    // check not multiple type handleAction
    if (!key.includes(COMMA)) {
      return {
        ...acc,
        [key]: callback,
      };
    }
    return {
      ...acc,
      ...key.split(COMMA).reduce(
        (acc, key) => ({
          ...acc,
          [key]: callback,
        }),
        {},
      ),
    };
  }, {});
}

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
    if (typeof callback !== 'function') {
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

export function createAsyncAction<TRequestType extends Type, TSuccessType extends Type, TFailureType extends Type>(
  types: [TRequestType, TSuccessType, TFailureType],
): <TRequestPayload, TSuccessPayload, TFailurePayload>() => {
  request: (payload: TRequestPayload) => { type: TRequestType; payload: TRequestPayload };
  success: (payload: TSuccessPayload) => { type: TSuccessType; payload: TSuccessPayload };
  failure: (payload: TFailurePayload) => { type: TFailureType; payload: TFailurePayload };
};

/**
 * @description Redux create async action
 * @param types action types [request, success, failure]
 * @example
 * ```typescript
 *  const getArticles = createAsyncAction(['getArticlesRequest', 'getArticlesSuccess', 'getArticlesFailure'])<string, Articles, string>();
 * ```
 */
export function createAsyncAction<TRequestType extends Type, TSuccessType extends Type, TFailureType extends Type>(
  types: [TRequestType, TSuccessType, TFailureType],
) {
  return <TRequestPayload, TSuccessPayload, TFailurePayload>() => {
    return {
      request: createAction(types[0], (payload: TRequestPayload) => payload),
      success: createAction(types[1], (payload: TSuccessPayload) => payload),
      failure: createAction(types[2], (payload: TFailurePayload) => payload),
    };
  };
}

export function getActionType<TAction>(
  reduxAction: (
    ...payload: any
  ) => {
    type: TAction;
  },
): TAction;

/**
 * Get action type
 * @param createAction redux action
 * @example
 * ```typescript
 * export const getArticle = createAction('GET_ARTICLE', (endpoint: string) => ({
 *  endpoint,
 * }));
 * const articleType = getActionType(getArticle);
 * ```
 * @result
 * ```typescript
 * articleType = 'GET_ARTICLE'
 * ```
 */
export function getActionType<TAction>(reduxAction: (...payload: any) => { type: TAction }): TAction {
  return reduxAction().type;
}

/**
 * @description Redux handle action
 * @param type action type
 * @param callback
 * @example
 * ```typescript
 * const reducer = createReducer<ExampleState, ExampleAction>(initialState, [
 *  handleAction('type', (state, action) => ({
 *    ...state,
 *    ...
 *  })),
 *  ...
 * ])
 * ```
 * ```
 */
export function handleAction<TState, TAction extends Action, TKey extends TAction['type']>(
  type: TKey,
  callback: HandleActionCallback<TState, TAction, TKey>,
) {
  return {
    [type]: callback,
  };
}

/**
 * @description Redux handle multiple action
 * @param types multiple action type `[type1, type2, ...]`
 * @param callback
 * @example
 * ```typescript
 * const reducer = createReducer<ExampleState, ExampleAction>(initialState, [
 *  handleActions(['type_1', 'type_2'], (state, action) => ({
 *    ...state,
 *    ...
 *  })),
 *  ...
 * ])
 * ```
 * ```
 */
export function handleActions<TState, TAction extends Action, TKey extends TAction['type']>(
  types: TKey[],
  callback: HandleActionCallback<TState, TAction, TKey>,
) {
  return {
    [types.join(COMMA)]: callback,
  };
}

/**
 * @description Redux handle async action
 * @param types action types [request, success, failure]
 * @example
 * ```
 * const homePage = createReducer<HomeState, HomeAction>(
 *  initialState,
 *  handleAsyncAction(['getHomeRequest', 'getHomeSuccess', 'getHomeFailure']),
 * );
 * ```
 * @result
 * ```typescript
 * const homePage = createReducer<HomeState, HomeAction>(initialState, [
 *   handleAction('getHomeRequest', state => ({
 *     ...state,
 *     status: 'loading',
 *   })),
 *   handleAction('getHomeSuccess', (state, action) => ({
 *     ...state,
 *     status: 'success',
 *     data: action.payload,
 *   })),
 *   handleAction('getHomeFailure', (state, action) => ({
 *     ...state,
 *     status: 'failure',
 *     message: action.payload,
 *   })),
 * ]);
 * ```
 */
export function handleAsyncAction<
  TState,
  TAction extends Action,
  TRequestType extends TAction['type'],
  TSuccessType extends TAction['type'],
  TFailureType extends TAction['type']
>(types: [TRequestType, TSuccessType, TFailureType]) {
  return [
    handleAction<TState, TAction, TAction['type']>(types[0], state => ({
      ...state,
      status: 'loading',
    })),
    handleAction<TState, TAction, TAction['type']>(types[1], (state, action) => ({
      ...state,
      status: 'success',
      data: action.payload,
    })),
    handleAction<TState, TAction, TAction['type']>(types[2], (state, action) => ({
      ...state,
      status: 'failure',
      message: action.payload,
    })),
  ];
}

/**
 * @description Redux create reducer
 * @param initialState Reducer state
 * @param handleActions handle action array
 * @example
 * ```typescript
 * import getExampleAction from 'getExampleAction';
 *
 * type ExampleAction = ReturnType<typeof getExampleAction>
 *
 * interface ExampleState = {
 *  id: string;
 *  title: string;
 * }
 *
 * const initialState = {
 *  id: 'example',
 *  title: 'example title',
 * }
 *
 * const reducer = createReducer<ExampleState, ExampleAction>(initialState, [
 *  handleAction('type', (state, action) => ({
 *    ...state,
 *    ...
 *  })),
 *  handleActions(['type_1', 'type_2'], (state, action) => ({
 *    ...state,
 *    ...
 *  }))
 * ])
 * ```
 */
export function createReducer<TState, TAction extends Action>(initialState: TState, handleActions: HandleAction<TState, TAction>[]) {
  const objectActions = getObjectFromHandleActions(handleActions);
  return (state = initialState, action: Extract<TAction, { type: TAction['type'] }>): TState => {
    const { type } = action;
    const callback = objectActions[type];
    return typeof callback === 'function' ? callback(state, action) : state;
  };
}
