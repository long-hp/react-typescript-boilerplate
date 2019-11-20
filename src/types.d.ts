import { Reducers } from 'configureStore';
import { ActionTypes } from 'types/actionTypes';

declare global {
  // Redux
  declare interface ActionOnlyType {
    type: ActionTypes;
  }
  declare interface Action<Payload> {
    type: ActionTypes;
    payload: Payload;
  }
  declare type AppState = Reducers;
  declare type GetState = () => AppState;
  declare type PromiseAction<Payload> = Promise<Action<Payload>>;
  declare type ThunkAction<Payload> = (
    dispatch: Dispatch<Payload>,
    getState: GetState,
  ) => any;
  declare type Dispatch<Payload> = (
    action:
      | Action<Payload>
      | ThunkAction<Payload>
      | PromiseAction<Payload>
      | Array<Action<Payload>>,
  ) => any;
  // declare type Connect<S, D> = ReturnType<S> & D;

  declare interface ReducerState<D> {
    status:
      | 'loading'
      | 'success'
      | 'failed'
      | 'loadmore'
      | 'loadmore_success'
      | 'loadmore_failed';
    message: string;
    data: D;
  }

  // Axios
  declare interface AxiosData<Data> {
    status: 'success' | 'error';
    error: string;
    data: Data;
  }
  declare interface AxiosResponse<Data> {
    status: number;
    data: AxiosData<Data>;
  }
  declare interface AxiosError {
    response: object;
  }
}
