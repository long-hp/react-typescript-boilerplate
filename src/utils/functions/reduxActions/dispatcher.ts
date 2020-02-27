import { useDispatch } from 'react-redux';

export function Dispatcher<TPayload extends any[], TAction>(action: (...payload: TPayload) => TAction) {
  const dispatch = useDispatch();
  return (...payload: TPayload) => dispatch(action(...payload));
}
