import { takeLatest, put, call, takeEvery, takeLeading, retry } from 'redux-saga/effects';
import { AxiosResponse, AxiosRequestConfig, AxiosError } from 'axios';
import { getActionType } from '../getActionType';

type Effects = 'takeLatest' | 'takeEvery' | 'takeLeading';

function getSagaEffect(sagaEffect: Effects) {
  switch (sagaEffect) {
    case 'takeEvery':
      return takeEvery;
    case 'takeLeading':
      return takeLeading;
    default:
    case 'takeLatest':
      return takeLatest;
  }
}

interface AsyncAction<TRequestPayload, TSuccessPayload, TFailurePayload> {
  request: (payload: TRequestPayload) => { type: string; payload: TRequestPayload };
  success: (payload: TSuccessPayload) => { type: string; payload: TSuccessPayload };
  failure: (payload: TFailurePayload) => { type: string; payload: TFailurePayload };
}

interface WatchAsyncActionParams<TRequestPayload, TSuccessPayload, TFailurePayload, TAxiosData> {
  sagaEffect: Effects;
  asyncAction: AsyncAction<TRequestPayload, TSuccessPayload, TFailurePayload>;
  success: (res: AxiosResponse<TAxiosData>, payload: TRequestPayload) => TSuccessPayload;
  failure: (error: AxiosError, payload: TRequestPayload) => TFailurePayload;
  axiosConfig: (payload: TRequestPayload) => AxiosRequestConfig;
  fetch: any;
  useRetry?: boolean;
  retryMaxTries?: number;
  retryDelay?: number;
}

export function watchAsyncAction<TRequestPayload, TSuccessPayload, TFailurePayload, TAxiosData = any>({
  sagaEffect,
  asyncAction,
  success,
  failure,
  axiosConfig,
  fetch,
  useRetry = false,
  retryMaxTries = 3,
  retryDelay = 5000,
}: WatchAsyncActionParams<TRequestPayload, TSuccessPayload, TFailurePayload, TAxiosData>) {
  const effect = getSagaEffect(sagaEffect);
  return function*() {
    yield effect(getActionType(asyncAction.request), function*({ payload }: ReturnType<typeof asyncAction.request>) {
      try {
        const res: AxiosResponse<TAxiosData> = yield useRetry
          ? retry(retryMaxTries, retryDelay, fetch, axiosConfig(payload))
          : call(fetch, axiosConfig(payload));
        yield put(asyncAction.success(success(res, payload)));
      } catch (error) {
        yield put(asyncAction.failure(failure(error, payload)));
      }
    });
  };
}
