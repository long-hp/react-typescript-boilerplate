import { getTodolist } from 'store/actions/actionTodolist/actionTodolist';
import { TodolistData } from 'models/Todolist';
import { createReducer, ActionTypes, handleAsyncAction } from 'utils/functions/reduxActions';

type TodolistAction = ActionTypes<typeof getTodolist>;

type TodolistState = ReducerState<TodolistData[]>;

const initialState: TodolistState = {
  data: [],
};

const todoList = createReducer<TodolistState, TodolistAction>(
  initialState,
  handleAsyncAction(['@getTodolistRequest', '@getTodolistSuccess', '@getTodolistFailure']),
);

export default todoList;
