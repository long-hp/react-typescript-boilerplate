import { TodolistData } from 'models/Todolist';
import { createAsyncAction } from 'utils/functions/reduxActions';

export const getTodolist = createAsyncAction(['@getTodolistRequest', '@getTodolistSuccess', '@getTodolistFailure'])<string, TodolistData[], string>();
