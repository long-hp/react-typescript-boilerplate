import { Todolist } from 'models/Todolist';
import { createAsyncAction, createDispatchAsyncAction } from 'wiloke-react-core/utils';
import { Endpoints } from 'types/Endpoints';

export const getTodolist = createAsyncAction([
  '@HomePage/getTodolistRequest',
  '@HomePage/getTodolistSuccess',
  '@HomePage/getTodolistFailure',
  '@HomePage/getTodolistCancel',
])<{ endpoint: Endpoints.Todolist }, { data: Todolist }, { message: string }>();

export const useGetTodolist = createDispatchAsyncAction(getTodolist);
