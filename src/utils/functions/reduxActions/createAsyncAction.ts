import { Type } from './types';
import { createAction } from './createAction';

export function createAsyncAction<TRequestType extends Type, TSuccessType extends Type, TFailureType extends Type>(
  types: [TRequestType, TSuccessType, TFailureType],
): <TRequestPayload, TSuccessPayload, TFailurePayload>() => {
  request: (payload: TRequestPayload) => { type: TRequestType; payload: TRequestPayload };
  success: (payload: TSuccessPayload) => { type: TSuccessType; payload: TSuccessPayload };
  failure: (payload: TFailurePayload) => { type: TFailureType; payload: TFailurePayload };
};

export function createAsyncAction<TRequestType extends Type, TSuccessType extends Type, TFailureType extends Type, TCancelType extends Type = Type>(
  types: [TRequestType, TSuccessType, TFailureType, TCancelType],
): <TRequestPayload, TSuccessPayload, TFailurePayload, TCancelPayload = undefined>() => {
  request: (payload: TRequestPayload) => { type: TRequestType; payload: TRequestPayload };
  success: (payload: TSuccessPayload) => { type: TSuccessType; payload: TSuccessPayload };
  failure: (payload: TFailurePayload) => { type: TFailureType; payload: TFailurePayload };
  cancel: (payload?: TCancelPayload) => { type: TCancelType; payload: TCancelPayload };
};

/**
 * @description Redux create async action
 * @param types action types [request, success, failure, ?cancel]
 * @example
 * ```typescript
 *  const getArticles = createAsyncAction(['getArticlesRequest', 'getArticlesSuccess', 'getArticlesFailure', 'getArticlesCancel'])<string, Articles, string>();
 * ```
 */
export function createAsyncAction<TRequestType extends Type, TSuccessType extends Type, TFailureType extends Type, TCancelType extends Type = Type>(
  types: [TRequestType, TSuccessType, TFailureType] | [TRequestType, TSuccessType, TFailureType, TCancelType],
) {
  return <TRequestPayload, TSuccessPayload, TFailurePayload, TCancelPayload = undefined>() => {
    return {
      request: createAction(types[0], (payload: TRequestPayload) => payload),
      success: createAction(types[1], (payload: TSuccessPayload) => payload),
      failure: createAction(types[2], (payload: TFailurePayload) => payload),
      ...(!!types[3] ? { cancel: createAction(types[3], (payload?: TCancelPayload) => payload) } : {}),
    };
  };
}
