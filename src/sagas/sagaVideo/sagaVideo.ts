import { put, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { getVideo, getVideoSuccess, getVideoFailed } from 'actions/actionVideo/actionVideo';

type VideoPendingAction = ReturnType<typeof getVideo>;

function* sagaVideo({ payload }: VideoPendingAction) {
  try {
    const { data } = yield call(axios.get, payload.endpoint);
    yield put(getVideoSuccess(data));
  } catch (err) {
    yield put(getVideoFailed('abc'));
  }
}

export default function* watchVideo() {
  const { type } = getVideo('');
  yield takeLatest(type, sagaVideo);
}
