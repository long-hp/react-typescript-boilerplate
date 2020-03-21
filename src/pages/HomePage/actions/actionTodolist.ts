import { TodolistItem } from 'api/Todolist';
import { createAsyncAction, createDispatchAction } from 'utils/functions/reduxActions';
import { TodolistEndpoint } from 'api/Endpoint';

export const getTodolist = createAsyncAction(['@getTodolistRequest', '@getTodolistSuccess', '@getTodolistFailure'])<
  TodolistEndpoint,
  TodolistItem[],
  string
>();

export const useGetTodolistRequest = createDispatchAction(getTodolist.request);
