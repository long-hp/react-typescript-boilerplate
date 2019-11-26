import { all } from 'redux-saga/effects';
import watchTodolist from 'sagas/sagaTodolist/sagaTodolist';
import watchVideo from 'sagas/sagaVideo/sagaVideo';
import watchGetPost from 'sagas/sageGetPost/sageGetPost';

export default function* sagas() {
  yield all([watchTodolist(), watchVideo(), watchGetPost()]);
}
