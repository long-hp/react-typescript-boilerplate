import {
  Todolist,
  TodolistSuccess,
  TodolistFailed,
} from 'actions/actionTodolist/actionTodolist';
import { TodolistData } from 'models/Todolist';

type TodolistState = ReducerState<TodolistData[]>;

type TodolistAll = Todolist & TodolistSuccess & TodolistFailed;

const initialState: TodolistState = {
  status: 'success',
  data: [],
  message: '',
};

function handleGetTodolist(
  state: TodolistState,
  _action: Action<Todolist>,
): TodolistState {
  return {
    ...state,
    status: 'loading',
  };
}

function handleGetTodolistSuccess(
  _state: TodolistState,
  { payload }: Action<TodolistSuccess>,
): TodolistState {
  return {
    ...initialState,
    data: payload.data,
  };
}

function handleGetTodolistFailed(
  _state: TodolistState,
  { payload }: Action<TodolistFailed>,
): TodolistState {
  return {
    ...initialState,
    status: 'failed',
    message: payload.message,
  };
}

export default function todolist(
  state = initialState,
  action: Action<TodolistAll>,
): TodolistState {
  switch (action.type) {
    case '@getTodolist':
      return handleGetTodolist(state, action);
    case '@getTodolistSuccess':
      return handleGetTodolistSuccess(state, action);
    case '@getTodolistFailed':
      return handleGetTodolistFailed(state, action);
    default:
      return state;
  }
}
