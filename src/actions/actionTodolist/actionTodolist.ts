import { TodolistData } from 'models/Todolist';
import { createAction } from 'utils/functions/reduxActions';

export const getTodolist = createAction('@getTodolist', (endpoint: string) => ({
  endpoint,
}));

export const getTodolistSuccess = createAction('@getTodolistSuccess', (data: TodolistData[]) => ({
  data,
}));

export const getTodolistFailed = createAction('@getTodolistFailed', (message: string) => ({
  message,
}));
