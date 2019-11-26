import { put, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
  getTodolist,
  getTodolistSuccess,
  getTodolistFailed,
} from 'actions/actionTodolist/actionTodolist';

type TodolistPendingAction = ReturnType<typeof getTodolist>;

function* sagaTodolist({ payload }: TodolistPendingAction) {
  try {
    const { data } = yield call(axios.get, payload.endpoint);
    yield put(getTodolistSuccess(data));
  } catch (err) {
    yield put(getTodolistFailed('Loi cmmnr'));
  }
}

export default function* watchTodolist() {
  const { type } = getTodolist('');
  yield takeLatest(type, sagaTodolist);
}
