import { handleAction } from '../handleAction';
import { Action, HandleActionCallback } from '../types';

/**
 * @description Redux handle async action
 * @param types action types [request, success, failure]
 * @param asyncActionOverride (optional) action override `{ request: (state, action) => State, success: (state, action) => State, failure: (state, action) => State }`
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
>(
  types: [TRequestType, TSuccessType, TFailureType],
  asyncActionOverride?: {
    request?: HandleActionCallback<TState, TAction, TRequestType>;
    success?: HandleActionCallback<TState, TAction, TSuccessType>;
    failure?: HandleActionCallback<TState, TAction, TFailureType>;
  },
) {
  return [
    !!asyncActionOverride?.request
      ? { [types[0]]: asyncActionOverride.request }
      : handleAction<TState, TAction, TAction['type']>(types[0], state => ({
          ...state,
          status: 'loading',
        })),
    !!asyncActionOverride?.success
      ? { [types[1]]: asyncActionOverride.success }
      : handleAction<TState, TAction, TAction['type']>(types[1], (state, action) => ({
          ...state,
          status: 'success',
          data: action.payload,
        })),
    !!asyncActionOverride?.failure
      ? { [types[2]]: asyncActionOverride.failure }
      : handleAction<TState, TAction, TAction['type']>(types[2], (state, action) => ({
          ...state,
          status: 'failure',
          message: action.payload,
        })),
  ];
}
