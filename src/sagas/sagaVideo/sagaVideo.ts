import { put, call, takeLatest } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import { getVideo, getVideoSuccess, getVideoFailed } from 'actions/actionVideo/actionVideo';
import { Video } from 'models/Video';

type VideoPendingAction = ReturnType<typeof getVideo>;

function* sagaVideo({ payload }: VideoPendingAction) {
  try {
    const res: AxiosResponse<Video> = yield call(axios.get, payload.endpoint);
    yield put(getVideoSuccess(res.data));
  } catch (err) {
    yield put(getVideoFailed('abc'));
  }
}

export default function* watchVideo() {
  const { type } = getVideo('');
  yield takeLatest(type, sagaVideo);
}
