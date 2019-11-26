import { PostTest } from 'models/PostTest';
import { createAction } from 'utils/functions/reduxActions';

export const getPost = createAction('@getPost', (endpoint: string) => ({
  endpoint,
}));

export const getPostSuccess = createAction('@getPostSuccess', (data: PostTest[]) => ({
  data,
}));

export const getPostFailed = createAction('@getPostFailed', (message: string) => ({
  message,
}));
