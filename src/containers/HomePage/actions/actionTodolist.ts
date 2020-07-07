import { TodolistItem } from 'api/Todolist';
import { createAsyncAction, createDispatchAction } from 'utils/functions/reduxActions';
import { TodolistEndpoint } from 'api/Endpoint';

export const getTodolist = createAsyncAction(['@getTodolistRequest', '@getTodolistSuccess', '@getTodolistFailure'])<
  { endpoint: TodolistEndpoint },
  { data: TodolistItem[] },
  { message: string }
>();

export const useGetTodolistRequest = createDispatchAction(getTodolist.request);
