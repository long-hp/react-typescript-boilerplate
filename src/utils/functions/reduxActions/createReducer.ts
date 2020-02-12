import { Action, HandleAction } from './types';
import { getObjectFromHandleActions } from './getObjectFromHandleActions';

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
