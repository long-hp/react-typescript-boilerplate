import { put, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
  getTodolist,
  getTodolistSuccess,
  getTodolistFailed,
  Todolist,
} from 'actions/actionTodolist/actionTodolist';

function* sagaTodolist({ payload }: Action<Todolist>) {
  try {
    const { data } = yield call(axios.get, payload.endpoint);
    yield put(getTodolistSuccess({ data }));
  } catch (err) {
    yield put(getTodolistFailed({ message: 'Loi cmmnr' }));
  }
}

export default function* watchTodolist() {
  const { type } = getTodolist({ endpoint: '' });
  yield takeLatest(type, sagaTodolist);
}
