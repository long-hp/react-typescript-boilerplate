[7]: ../css/scss.md
[9]: ./routing.md

<!--  content -->

# Redux

## Actions

Cách định nghĩa một action

```tsx
  import { Todolist } from 'models/Todolist';
  import { createAsyncAction, createDispatchAsyncAction } from 'wiloke-react-core/utils';
  import { Endpoints } from 'types/Endpoints';

  export const getTodolist = createAsyncAction([
    '@DemoPage/getTodolistRequest',
    '@DemoPage/getTodolistSuccess',
    '@DemoPage/getTodolistFailure',
    '@DemoPage/getTodolistCancel',
  ])<{ endpoint: Endpoints.Todolist }, { data: Todolist }, { message: string }>();

  export const useGetTodolist = createDispatchAsyncAction(getTodolist);
```

## Reducers

Cách định nghĩa một reducer

```tsx
  import { ActionTypes, createReducer, handleAction } from 'wiloke-react-core/utils';
  import { Todolist } from 'models/Todolist';
  import { getTodolist } from '../actions/actionTodolist';

  type TodolistAction = ActionTypes<typeof getTodolist>;

  interface TodolistState {
    status: Status;
    errorMessage: string;
    data: Todolist;
  }

  const initialState: TodolistState = {
    status: 'idle',
    errorMessage: '',
    data: [],
  };

  const reducerTodolist = createReducer<TodolistState, TodolistAction>(initialState, [
    handleAction('@DemoPage/getTodolistRequest', ({ state }) => ({
      ...state,
      status: 'loading',
    })),
    handleAction('@DemoPage/getTodolistSuccess', ({ state, action }) => ({
      ...state,
      status: 'success',
      data: action.payload.data,
    })),
    handleAction('@DemoPage/getTodolistFailure', ({ state, action }) => ({
      ...state,
      status: 'failure',
      errorMessage: action.payload.message,
    })),
    handleAction('@DemoPage/getTodolistCancel', ({ state }) => {
      // mutable test
      state.status = 'idle';
      return state;
    }),
  ]);

  export default reducerTodolist;
```

Khai báo reducer vừa tạo trong store/rootReducers

```tsx
const reducers = {
  ...reducersDemoPage,
  ...reducersHeader,
};
```

## Saga

Cách định nghĩa một saga

```tsx
    import { put, call, take, fork, cancel } from 'redux-saga/effects';
    import { AxiosResponse } from 'axios';
    import { Todolist } from 'models/Todolist';
    import fetchAPI from 'utils/functions/fetchAPI';
    import { getTodolist } from 'containers/DemoPage/actions/actionTodolist';
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
        if (actionTodolistCancel.type === '@DemoPage/getTodolistCancel' && !!todoListTask) {
          yield cancel(todoListTask);
        }
      }
    }
```

Khai báo reducer vừa tạo trong store/rootSagas

```tsx
const sagas = [...sagaDemoPage];
```

<!-- end of content -->

[Prev][7] | [Next][9]
