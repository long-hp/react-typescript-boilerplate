import { all } from 'redux-saga/effects';
import watchIncrement from 'sagas/sagaIncrement/sagaIncrement';

export default function* sagas() {
  yield all([watchIncrement()]);
}
