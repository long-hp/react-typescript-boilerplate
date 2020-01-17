import axios, { AxiosRequestConfig, AxiosPromise } from 'axios';
import { CANCEL } from 'redux-saga';
import configureApp from 'configureApp.json';

axios.defaults.baseURL = configureApp.baseUrl;
axios.defaults.timeout = configureApp.timeout;

const { CancelToken } = axios;

export default function fetchAPI<T>(config: AxiosRequestConfig): AxiosPromise<T> {
  const source = CancelToken.source();
  const request: any = axios({
    ...config,
    cancelToken: source.token,
  });
  request[CANCEL] = source.cancel;

  return request;
}
