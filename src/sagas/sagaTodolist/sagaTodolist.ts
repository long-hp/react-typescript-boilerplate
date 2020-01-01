import { put, call, takeLatest } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import {
  getTodolist,
  getTodolistSuccess,
  getTodolistFailed,
} from 'actions/actionTodolist/actionTodolist';
import { TodolistData } from 'models/Todolist';

type TodolistPendingAction = ReturnType<typeof getTodolist>;

function* sagaTodolist({ payload }: TodolistPendingAction) {
  try {
    const res: AxiosResponse<TodolistData[]> = yield call(axios.get, payload.endpoint);
    yield put(getTodolistSuccess(res.data));
  } catch (err) {
    yield put(getTodolistFailed('Loi cmmnr'));
  }
}

export default function* watchTodolist() {
  const { type } = getTodolist('');
  yield takeLatest(type, sagaTodolist);
}
