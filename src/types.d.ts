import { Reducers } from 'configureStore';
import { ActionTypes as _ActionTypes } from 'types/actionTypes';

declare global {
  // Redux
  declare type ActionTypes = _ActionTypes;
  declare interface ActionOnlyType {
    type: ActionTypes;
  }
  declare interface Action<TPayload> {
    type: ActionTypes;
    payload: TPayload;
  }
  declare type AppState = Reducers;
  declare type GetState = () => AppState;
  declare type PromiseAction<TPayload> = Promise<Action<TPayload>>;
  declare type ThunkAction<TPayload> = (
    dispatch: Dispatch<TPayload>,
    getState: GetState,
  ) => any;
  declare type Dispatch<TPayload> = (
    action:
      | Action<TPayload>
      | ThunkAction<TPayload>
      | PromiseAction<TPayload>
      | Action<TPayload>[],
  ) => any;
  // declare type Connect<S, D> = ReturnType<S> & D;

  declare interface ReducerState<TData> {
    status:
      | 'loading'
      | 'success'
      | 'failed'
      | 'loadmore'
      | 'loadmore_success'
      | 'loadmore_failed';
    message: string;
    data: TData;
  }

  // Axios
  declare interface AxiosData<TData> {
    status: 'success' | 'error';
    error: string;
    data: TData;
  }
  declare interface AxiosResponse<TData> {
    status: number;
    data: AxiosData<TData>;
  }
  declare interface AxiosError {
    response: object;
  }

  // Support flowtype
  declare type React$Node = React.ReactNode;
  declare type $Shape = Partial;

  // Others
  declare type Timeout = NodeJS.Timeout;
}
