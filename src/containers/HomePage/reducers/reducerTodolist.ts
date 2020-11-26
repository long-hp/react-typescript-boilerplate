import { ActionTypes, createReducer, handleAction } from 'wiloke-react-core/utils';
import { Todolist } from 'models/Todolist';
import { getTodolist } from '../actions/actionTodolist';

type TodolistAction = ActionTypes<typeof getTodolist>;

interface TodolistState {
  status: Status;
  errorMessage: string;
  data: Todolist;
}

const initialState: TodolistState = {
  status: 'idle',
  errorMessage: '',
  data: [],
};

const reducerTodolist = createReducer<TodolistState, TodolistAction>(initialState, [
  handleAction('@HomePage/getTodolistRequest', ({ state }) => ({
    ...state,
    status: 'loading',
  })),
  handleAction('@HomePage/getTodolistSuccess', ({ state, action }) => ({
    ...state,
    status: 'success',
    data: action.payload.data,
  })),
  handleAction('@HomePage/getTodolistFailure', ({ state, action }) => ({
    ...state,
    status: 'failure',
    errorMessage: action.payload.message,
  })),
  handleAction('@HomePage/getTodolistCancel', ({ state }) => {
    // mutable test
    state.status = 'idle';
    return state;
  }),
]);

export default reducerTodolist;
