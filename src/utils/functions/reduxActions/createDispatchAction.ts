import { useDispatch } from 'react-redux';

function Dispatcher<TPayload extends any[], TAction>(action: (...payload: TPayload) => TAction) {
  const dispatch = useDispatch();
  return (...payload: TPayload) => dispatch(action(...payload));
}

export function createDispatchAction<TPayload, TAction>(action: () => TAction): () => () => TAction;

export function createDispatchAction<TPayload extends object, TAction>(action: (payload: TPayload) => TAction): () => (payload: TPayload) => TAction;

export function createDispatchAction<TPayload extends any, TAction>(action: (payload: TPayload) => TAction): () => (payload: TPayload) => TAction;

export function createDispatchAction<TPayload extends any[], TAction>(
  action: (...payload: TPayload) => TAction,
): () => (...payload: TPayload) => TAction;

/**
 * Redux createDispatchAction
 * @param action redux action
 * @example
 * ```typescript
 * export const getPost = createAction('GET_POST', (endpoint: string) => ({ endpoint }));
 * export const useGetPost = createDispatchAction(getPost);
 *
 * // Use in component
 * const getPost = useGetPost();
 * useMount(() => getPost('posts/:id'));
 * ```
 */
export function createDispatchAction<TPayload extends any[], TAction>(action: (...payload: TPayload) => TAction) {
  return () => Dispatcher(action);
}
