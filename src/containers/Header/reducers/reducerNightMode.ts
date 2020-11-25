import { ActionTypes, createReducer, handleAction } from 'wiloke-react-core/utils';
import { actionSetNightMode } from '../actions/actionNightMode';

type ActionNightMode = ActionTypes<typeof actionSetNightMode>;

type StateNightMode = boolean;

const initialState: StateNightMode = false;

const reducerNightMode = createReducer<StateNightMode, ActionNightMode>(initialState, [
  handleAction('@Header/setNightMode', ({ action }) => action.payload.nightMode),
]);

export default reducerNightMode;
