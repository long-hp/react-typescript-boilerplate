import { PostTest } from 'models/PostTest';
import { createAction, ActionTypes } from 'utils/functions/reduxActions';

export const getPostRequest = createAction('@getPostRequest', (endpoint: string) => ({
  endpoint,
}));

export const getPostSuccess = createAction('@getPostSuccess', (data: PostTest[]) => ({
  data,
}));

export const getPostFailure = createAction('@getPostFailure', (message: string) => ({
  message,
}));

export type GetPostAction = ActionTypes<typeof getPostSuccess | typeof getPostRequest | typeof getPostFailure>;
