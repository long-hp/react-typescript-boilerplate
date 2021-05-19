import { ActionTypes, createReducer, handleAction } from 'wiloke-react-core/utils';
import { actionExample } from '../actions/actionExample';

type ExampleState = boolean;
type ExampleAction = ActionTypes<typeof actionExample>;

export const reducerExample = createReducer<ExampleState, ExampleAction>(false, [
  handleAction('@HomePage/actionExample', ({ state }) => {
    return !state;
  }),
]);
