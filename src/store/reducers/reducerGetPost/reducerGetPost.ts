import { GetPostAction } from 'store/actions/actionGetPost/actionGetPost';
import { createReducer, handleAction } from 'utils/functions/reduxActions';
import { PostTest } from 'models/PostTest';

type PostState = ReducerState<PostTest[]>;

const initialState: PostState = {
  status: 'success',
  data: [],
  message: '',
};

const postTest = createReducer<PostState, GetPostAction>(initialState, [
  handleAction('@getPostRequest', state => ({
    ...state,
    status: 'loading',
  })),
  handleAction('@getPostSuccess', (state, action) => ({
    ...state,
    status: 'success',
    data: action.payload.data,
  })),
  handleAction('@getPostFailure', (state, action) => ({
    ...state,
    status: 'failure',
    message: action.payload.message,
  })),
]);

export default postTest;
