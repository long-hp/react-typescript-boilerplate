import { all } from 'redux-saga/effects';
import watchTodolist from 'sagas/sagaTodolist/sagaTodolist';

export default function* sagas() {
  yield all([watchTodolist()]);
}
