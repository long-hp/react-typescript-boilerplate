import { all, call, spawn, delay } from 'redux-saga/effects';
import { sagaHomePage } from 'containers/HomePage';

const sagas = [...sagaHomePage];

// https://github.com/redux-saga/redux-saga/issues/760#issuecomment-273737022
const makeRestartable = (saga: any) => {
  return function*() {
    yield spawn(function*() {
      while (true) {
        try {
          yield call(saga);
          console.error('unexpected root saga termination. The root sagas are supposed to be sagas that live during the whole app lifetime!', saga);
        } catch (e) {
          console.error('Saga error, the saga will be restarted', e);
        }
        yield delay(1000); // Avoid infinite failures blocking app TODO use backoff retry policy...
      }
    });
  };
};

const rootSagas = sagas.map(makeRestartable);

export default function* root() {
  yield all(rootSagas.map(call));
}
