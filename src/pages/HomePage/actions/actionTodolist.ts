import { TodolistItem } from 'api/Todolist';
import { createAsyncAction, createDispatchAction } from 'utils/functions/reduxActions';

export const getTodolist = createAsyncAction(['@getTodolistRequest', '@getTodolistSuccess', '@getTodolistFailure'])<string, TodolistItem[], string>();

export const useGetTodolistRequest = createDispatchAction(getTodolist.request);
