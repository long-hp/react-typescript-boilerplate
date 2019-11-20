import { takeLatest, put, delay } from 'redux-saga/effects';
import { actionIncrement } from 'actions';
import { IncrementPending } from 'actions/actionIncrement/actionIncrement';

function* sagaIncrement({ payload }: { payload: IncrementPending }) {
  yield delay(500);
  yield put(actionIncrement.incrementSuccess(payload.step));
}

export default function* watchIncrement() {
  const increment = actionIncrement.increment().type;
  yield takeLatest<any>(increment, sagaIncrement);
}
