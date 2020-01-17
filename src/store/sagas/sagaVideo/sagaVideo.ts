import { put, call, takeLatest } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import { getVideo } from 'store/actions/actionVideo/actionVideo';
import { Video } from 'models/Video';
import { getActionType } from 'utils/functions/reduxActions';

function* sagaVideo({ payload }: ReturnType<typeof getVideo.request>) {
  try {
    const res: AxiosResponse<Video> = yield call(axios.get, payload.endpoint);
    yield put(getVideo.success({ data: res.data }));
  } catch (err) {
    yield put(getVideo.failure({ message: 'abc' }));
  }
}

export default function* watchVideo() {
  yield takeLatest(getActionType(getVideo.request), sagaVideo);
}
