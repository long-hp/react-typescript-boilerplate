import { put, call, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { getPostRequest, getPostSuccess, getPostFailure } from 'store/actions/actionGetPost/actionGetPost';
import { PostTest } from 'models/PostTest';
import fetchAPI from 'utils/functions/fetchAPI';
import { getActionType } from 'utils/functions/reduxActions';

function* sagaGetPost({ payload }: ReturnType<typeof getPostRequest>) {
  try {
    const res: AxiosResponse<PostTest[]> = yield call(fetchAPI, { method: 'GET', url: payload.endpoint });
    yield put(getPostSuccess(res.data));
  } catch {
    yield put(getPostFailure('Loi cmnr'));
  }
}

export default function* watchGetPost() {
  yield takeLatest(getActionType(getPostRequest), sagaGetPost);
}
