import { Action, HandleAction } from './types';
import { getObjectFromHandleActions } from './getObjectFromHandleActions';
import { immutableState } from './immutableState';

export function createReducer<TState, TAction extends Action>(
  initialState: TState,
  handleActions: HandleAction<TState, TAction>[],
): (state: TState | undefined, action: Extract<TAction, { type: TAction['type'] }>) => TState;

export function createReducer<TState, TAction extends Action>(
  initialState: TState,
  objectAction: HandleAction<TState, TAction>,
): (state: TState | undefined, action: Extract<TAction, { type: TAction['type'] }>) => TState;

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
 * // using with handleAction and handleActions
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
 *
 * // using with object action
 * const reducer = createReducer<ExampleState, ExampleAction>(initialState, {
 *  type: (state, action) => ({
 *    ...state,
 *    ...
 *  }),
 *  type_2: (state, action) => ({
 *    ...state,
 *    ...
 *  })
 * })
 * ```
 */
export function createReducer<TState, TAction extends Action>(
  initialState: TState,
  handleActions: HandleAction<TState, TAction> | HandleAction<TState, TAction>[],
) {
  const objectActions = Array.isArray(handleActions) ? getObjectFromHandleActions(handleActions) : handleActions;
  return (state = initialState, action: Extract<TAction, { type: TAction['type'] }>): TState => {
    const { type } = action;
    const callback = objectActions[type];
    return typeof callback === 'function' ? callback(immutableState(state), action) : state;
  };
}
