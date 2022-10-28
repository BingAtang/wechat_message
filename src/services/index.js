import axios from 'axios';
import { sendReportToMe } from '../finalSend/index.js';

const service = axios.create({
  timeout: 5000,
});

let url = '';

service.interceptors.request.use(
  (config) => {
    url = !!config.url ? config.url : 'nourl';
    return config;
  },
  (error) => {
    // handle requestError
    console.log(
      '========================================请求错误！！！！！！！！=========================================='
    );
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // handle response error
    console.log(
      '========================================响应错误！！！！！！！！=========================================='
    );
    return Promise.reject(error);
  }
);

export default service;
