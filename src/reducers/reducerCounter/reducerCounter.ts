import { IncrementPayload } from 'actions/actionIncrement/actionIncrement';

type CounterState = ReducerState<{
  counter: number;
}>;

const initialState: CounterState = {
  status: 'success',
  data: {
    counter: 0,
  },
  message: '',
};

export default function counter(
  state: CounterState = initialState,
  { type, payload }: Action<IncrementPayload>,
): CounterState {
  switch (type) {
    case 'INCREMENT':
      return {
        ...state,
        status: 'loading',
      };
    case 'INCREMENT_SUCCESS':
      return {
        ...initialState,
        data: {
          counter: state.data.counter + payload.step,
        },
      };
    default:
      return state;
  }
}
