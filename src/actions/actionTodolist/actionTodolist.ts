import { TodolistData } from 'models/Todolist';

export interface Todolist {
  endpoint: string;
}

export interface TodolistSuccess {
  data: TodolistData[];
}

export interface TodolistFailed {
  message: string;
}

export function getTodolist({ endpoint }: Todolist): Action<Todolist> {
  return {
    type: '@getTodolist',
    payload: {
      endpoint,
    },
  };
}

export function getTodolistSuccess({
  data,
}: TodolistSuccess): Action<TodolistSuccess> {
  return {
    type: '@getTodolistSuccess',
    payload: {
      data,
    },
  };
}

export function getTodolistFailed({
  message,
}: TodolistFailed): Action<TodolistFailed> {
  return {
    type: '@getTodolistFailed',
    payload: {
      message,
    },
  };
}
