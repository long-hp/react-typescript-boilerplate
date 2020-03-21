import { put, call, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { TodolistItem } from 'api/Todolist';
import fetchAPI from 'utils/functions/fetchAPI';
import { getActionType } from 'utils/functions/reduxActions';
import { getTodolist } from 'pages/HomePage/actions/actionTodolist';

function* handleTodolist({ payload }: ReturnType<typeof getTodolist.request>) {
  try {
    const res: AxiosResponse<TodolistItem[]> = yield call(fetchAPI.request, { url: payload });
    yield put(getTodolist.success(res.data));
  } catch (err) {
    yield put(getTodolist.failure('Loi cmmnr'));
  }
}

export default function* watchTodolist() {
  yield takeLatest(getActionType(getTodolist.request), handleTodolist);
}
