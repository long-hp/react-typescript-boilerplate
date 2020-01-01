import { put, call, takeLatest } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import { getPost, getPostSuccess, getPostFailed } from 'actions/actionGetPost/actionGetPost';
import { PostTest } from 'models/PostTest';

type GetPostAction = ReturnType<typeof getPost>;

function* sagaGetPost({ payload }: GetPostAction) {
  try {
    const res: AxiosResponse<PostTest[]> = yield call(axios.get, payload.endpoint);
    yield put(getPostSuccess(res.data));
  } catch (err) {
    yield put(getPostFailed('Loi cmnr'));
  }
}

export default function* watchGetPost() {
  const { type } = getPost('');
  yield takeLatest(type, sagaGetPost);
}
