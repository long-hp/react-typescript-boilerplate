import { Action, HandleActionCallback } from './types';
import { COMMA } from './constants';

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
