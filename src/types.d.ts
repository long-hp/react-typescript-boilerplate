import * as React from 'react';
import { Reducers } from './configureStore';

declare global {
  declare type AppState = Reducers;
  declare type GetState = () => AppState;
  declare type PromiseAction<TPayload> = Promise<Action<TPayload>>;
  declare type ThunkAction<TPayload> = (dispatch: Dispatch<TPayload>, getState: GetState) => any;
  declare type Dispatch<TPayload> = (action: Action<TPayload> | ThunkAction<TPayload> | PromiseAction<TPayload> | Action<TPayload>[]) => any;
  declare type Connect<TTypeOfMapStateToProps, TTypeOfMapDispatchToProps> = ReturnType<TTypeOfMapStateToProps> & TTypeOfMapDispatchToProps;

  declare type ValueOf<T> = T[keyof T];

  // Others
  declare type Timeout = NodeJS.Timeout;
}
