import { getPostSuccess, getPostFailed } from 'actions/actionGetPost/actionGetPost';
import { createReducer, handleAction } from 'utils/functions/reduxActions';
import { PostTest } from 'models/PostTest';

type GetPostSuccessAction = ReturnType<typeof getPostSuccess>;
type GetPostFailedAction = ReturnType<typeof getPostFailed>;
type PostState = ReducerState<PostTest[]>;

const initialState: PostState = {
  status: 'success',
  data: [],
  message: '',
};

const postTest = createReducer<PostState>(initialState, [
  handleAction('@getPost', state => ({
    ...state,
    status: 'loading',
  })),
  handleAction('@getPostSuccess', (state, action: GetPostSuccessAction) => ({
    ...state,
    status: 'success',
    data: action.payload.data,
  })),
  handleAction('@getPostFailed', (state, action: GetPostFailedAction) => ({
    ...state,
    status: 'failed',
    message: action.payload.message,
  })),
]);

export default postTest;
