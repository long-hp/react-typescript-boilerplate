import { getTodolistSuccess, getTodolistFailed } from 'actions/actionTodolist/actionTodolist';
import { TodolistData } from 'models/Todolist';
import { createReducer, handleAction } from 'utils/functions/reduxActions';

type TodolistSuccessAction = ReturnType<typeof getTodolistSuccess>;
type TodolistFailedAction = ReturnType<typeof getTodolistFailed>;

type TodolistState = ReducerState<TodolistData[]>;

const initialState: TodolistState = {
  status: 'success',
  data: [],
  message: '',
};

const todoList = createReducer<TodolistState>(initialState, [
  handleAction('@getTodolist', state => ({
    ...state,
    status: 'loading',
  })),
  handleAction('@getTodolistSuccess', (state, action: TodolistSuccessAction) => ({
    ...state,
    status: 'success',
    data: action.payload.data,
  })),
  handleAction('@getTodolistFailed', (state, action: TodolistFailedAction) => ({
    ...state,
    status: 'failed',
    data: [],
    message: action.payload.message,
  })),
]);

export default todoList;
