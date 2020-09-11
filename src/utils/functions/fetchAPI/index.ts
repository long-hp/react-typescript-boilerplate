import configureApp from 'configureApp.json';
import qs from 'qs';
import { CANCEL } from 'redux-saga';
import ConfigureAxios from './ConfigureAxios';

interface RefreshTokenResponseData {
  data: {
    accessToken: string;
  };
}

interface AxiosData {
  refreshToken: string;
  accessToken: string;
}

const axiosConfig = new ConfigureAxios({
  configure: {
    method: 'GET',
    baseURL: configureApp.baseUrl,
    timeout: configureApp.timeout,
    paramsSerializer: qs.stringify,
  },
  setAccessToken() {
    return '';
  },
  setRefreshToken() {
    return '';
  },
});

const fetchAPI = axiosConfig.create(CANCEL);

axiosConfig.accessToken({
  setCondition(config) {
    const isAppURL = config?.url?.search(/^http/g) === -1;
    return isAppURL;
  },
});

axiosConfig.refreshToken<RefreshTokenResponseData, AxiosData>({
  url: 'Endpoint Renew Token',
  setRefreshCondition(error) {
    return error.response?.status === 401 && !error.config.url?.includes('Endpoint Renew Token');
  },
  axiosData(refreshToken, accessToken) {
    return {
      refreshToken,
      accessToken,
    };
  },
  success(res, originalRequest) {
    // store.dispatch(
    //   updateToken({
    //     accessToken: res.data.data.accessToken,
    //   }),
    // );
    originalRequest.headers.Authorization = `Bearer ${res.data.data.accessToken}`;
  },
  failure(error) {
    console.log(error.response);
    // store.dispatch(logout());
  },
});

export default fetchAPI;
