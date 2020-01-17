import { put, call, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { getTodolist } from 'store/actions/actionTodolist/actionTodolist';
import { TodolistData } from 'models/Todolist';
import fetchAPI from 'utils/functions/fetchAPI';
import { getActionType } from 'utils/functions/reduxActions';

function* sagaTodolist({ payload }: ReturnType<typeof getTodolist.request>) {
  try {
    const res: AxiosResponse<TodolistData[]> = yield call(fetchAPI, { method: 'GET', url: payload });
    yield put(getTodolist.success(res.data));
  } catch (err) {
    yield put(getTodolist.failure('Loi cmmnr'));
  }
}

export default function* watchTodolist() {
  yield takeLatest(getActionType(getTodolist.request), sagaTodolist);
}
