import { Action, HandleAction, HandleActionCallback } from './types';
import { COMMA } from './constants';

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
export function getObjectFromHandleActions<TState, TAction extends Action>(
  handleActions: HandleAction<TState, TAction>[],
): HandleAction<TState, TAction> {
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
