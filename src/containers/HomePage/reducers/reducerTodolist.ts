import { ActionTypes, createReducer, handleAction } from 'utils/functions/reduxActions';
import { TodolistItem } from 'utils/api/Todolist';
import { getTodolist } from '../actions/actionTodolist';

type TodolistAction = ActionTypes<typeof getTodolist>;

interface TodolistState {
  isLoading: boolean;
  errorMessage: string;
  data: TodolistItem[];
}

const initialState: TodolistState = {
  isLoading: false,
  errorMessage: '',
  data: [],
};

export const todolist = createReducer<TodolistState, TodolistAction>(initialState, [
  handleAction('@getTodolistRequest', ({ state }) => ({
    ...state,
    isLoading: true,
  })),
  handleAction('@getTodolistSuccess', ({ state, action }) => ({
    ...state,
    isLoading: false,
    data: action.payload.data,
  })),
  handleAction('@getTodolistFailure', ({ state, action }) => ({
    ...state,
    isLoading: false,
    errorMessage: action.payload.message,
  })),
]);
