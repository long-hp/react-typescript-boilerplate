import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';
import qs from 'qs';
import { CANCEL } from 'redux-saga';
import configureApp from 'configureApp.json';

const { CancelToken } = axios;
const source = CancelToken.source();

const axiosConfig: AxiosRequestConfig = {
  method: 'GET',
  baseURL: configureApp.baseUrl,
  timeout: configureApp.timeout,
  cancelToken: source.token,
  paramsSerializer: qs.stringify,
};

const fetchAPI = axios.create(axiosConfig);

(fetchAPI as AxiosInstance & { [key: string]: unknown })[CANCEL] = source.cancel;

fetchAPI.interceptors.request.use(config => {
  if (!config?.url) {
    return config;
  }

  const isAppURL = config.url.search(/^http/g) === -1;
  if (isAppURL && !config.headers.Authorization) {
    // const token = localStorage or redux persists state
    // if (!!token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
  }

  return config;
});

export default fetchAPI;
