import { put, call, take, fork, cancel } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { Todolist } from 'models/Todolist';
import fetchAPI from 'utils/functions/fetchAPI';
import { getTodolist } from 'containers/HomePage/actions/actionTodolist';
import { Task } from 'redux-saga';
import { getActionType } from 'wiloke-react-core/utils';

type GetTodolistRequest = ReturnType<typeof getTodolist.request>;
type GetTodolistCancel = ReturnType<typeof getTodolist.cancel>;

function* handleTodolist({ payload }: GetTodolistRequest) {
  try {
    const res: AxiosResponse<Todolist> = yield call(fetchAPI.request, {
      url: payload.endpoint,
    });
    yield put(getTodolist.success({ data: res.data }));
  } catch (err) {
    yield put(getTodolist.failure({ message: 'Error' }));
  }
}

let todoListTask: Task | undefined;

export function* watchTodolistRequest() {
  while (true) {
    const actionTodolistRequest: GetTodolistRequest = yield take(getActionType(getTodolist.request));
    if (!!todoListTask) {
      yield cancel(todoListTask);
    }
    todoListTask = yield fork(handleTodolist, actionTodolistRequest);
  }
}

export function* watchTodolistCancel() {
  while (true) {
    const actionTodolistCancel: GetTodolistCancel = yield take(getActionType(getTodolist.cancel));
    if (actionTodolistCancel.type === '@HomePage/getTodolistCancel' && !!todoListTask) {
      yield cancel(todoListTask);
    }
  }
}
