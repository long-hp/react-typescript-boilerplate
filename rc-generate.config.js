const styles = ``;
const actions = `
import { createAsyncAction, createDispatchAsyncAction } from 'wiloke-react-core';

export const action = createAsyncAction(['@Page/actionRequest', '@Page/actionSuccess', '@Page/actionFailure'])<
  { endpoint: string },
  { data: any[] },
  { message: string }
>();

export const useAction = createDispatchAsyncAction(action);
`;
const reducers = `
import { ActionTypes, createReducer, handleAction } from 'wiloke-react-core';
import { action } from '../actions/actions';

type Action = ActionTypes<typeof action>;

interface State {
  isLoading: boolean;
  errorMessage: string;
  data: any[];
}

const initialState = {
  isLoading: false,
  errorMessage: '',
  data: [],
} as State;

const reducer = createReducer<State, Action>(initialState, [
  handleAction('@Page/actionRequest', ({ state }) => ({
    ...state,
    isLoading: true,
  })),
  handleAction('@Page/actionSuccess', ({ state, action }) => ({
    ...state,
    isLoading: false,
    data: action.payload.data,
  })),
  handleAction('@Page/actionFailure', ({ state, action }) => ({
    ...state,
    isLoading: false,
    errorMessage: action.payload.message,
  })),
]);

export default reducer;
`;
const sagas = `
import { put, call, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { getActionType } from 'wiloke-react-core';
import fetchAPI from 'utils/functions/fetchAPI';
import { action } from '../actions/actions';

function* handle({ payload }: ReturnType<typeof action.request>) {
  try {
    const res: AxiosResponse<any[]> = yield call(fetchAPI.request, {
      url: payload.endpoint,
    });
    yield put(action.success({ data: res.data }));
  } catch (err) {
    yield put(action.failure({ message: 'Error' }));
  }
}

export default function* watchAction() {
  yield takeLatest(getActionType(action.request), handle);
}
`;
const componentContent = `
    <div className={styles.container}>
      Content
    </div>
`;
const thunks = ``;

const config = {
  baseUrl: 'src',
  typescript: true,
  reactNative: false,
  templates: {
    styles,
    actions,
    reducers,
    sagas,
    thunks,
    componentContent,
  },
};
module.exports = config;
