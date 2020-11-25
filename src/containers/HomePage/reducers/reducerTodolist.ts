import { ActionTypes, createReducer, handleAction } from 'wiloke-react-core/utils';
import { Todolist } from 'models/Todolist';
import { getTodolist } from '../actions/actionTodolist';

type TodolistAction = ActionTypes<typeof getTodolist>;

interface TodolistState {
  isLoading: boolean;
  errorMessage: string;
  data: Todolist;
}

const initialState: TodolistState = {
  isLoading: false,
  errorMessage: '',
  data: [],
};

const reducerTodolist = createReducer<TodolistState, TodolistAction>(initialState, [
  handleAction('@HomePage/getTodolistRequest', ({ state }) => ({
    ...state,
    isLoading: true,
  })),
  handleAction('@HomePage/getTodolistSuccess', ({ state, action }) => ({
    ...state,
    isLoading: false,
    data: action.payload.data,
  })),
  handleAction('@HomePage/getTodolistFailure', ({ state, action }) => ({
    ...state,
    isLoading: false,
    errorMessage: action.payload.message,
  })),
  handleAction('@HomePage/getTodolistCancel', ({ state }) => {
    // mutable test
    state.isLoading = false;
    return state;
  }),
]);

export default reducerTodolist;
