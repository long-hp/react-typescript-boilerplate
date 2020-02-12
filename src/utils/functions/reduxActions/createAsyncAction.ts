import { Type } from './types';
import { createAction } from './createAction';

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
