import { TodolistItem } from 'models/Todolist';
import { createAsyncAction, createDispatchAction } from 'wiloke-react-core/utils';
import { TodolistEndpoint } from 'models/Endpoint';

export const getTodolist = createAsyncAction(['@getTodolistRequest', '@getTodolistSuccess', '@getTodolistFailure'])<
  { endpoint: TodolistEndpoint },
  { data: TodolistItem[] },
  { message: string }
>();

export const useGetTodolistRequest = createDispatchAction(getTodolist.request);
