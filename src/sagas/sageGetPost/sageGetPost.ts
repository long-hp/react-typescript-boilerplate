import { put, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { getPost, getPostSuccess, getPostFailed } from 'actions/actionGetPost/actionGetPost';

type GetPostAction = ReturnType<typeof getPost>;

function* sagaGetPost({ payload }: GetPostAction) {
  try {
    const { data } = yield call(axios.get, payload.endpoint);
    yield put(getPostSuccess(data));
  } catch (err) {
    yield put(getPostFailed('Loi cmnr'));
  }
}

export default function* watchGetPost() {
  const { type } = getPost('');
  yield takeLatest(type, sagaGetPost);
}
