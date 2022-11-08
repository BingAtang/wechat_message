import axios from 'axios';
import dayjs from 'dayjs';
import { sendReportToMe } from '../finalSend/index.js';

const service = axios.create({
  timeout: 600000,
  retry: 5,
  retryDelay: 10000,
  __retryCount: 0,
});

let url = '';

service.interceptors.request.use(
  (config) => {
    url = !!config.url ? config.url : 'nourl';
    return config;
  },
  (error) => {
    // handle requestError
    console.log('==========================请求错误！！！！！！！！===================');
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // handle response error

    if (error.code === 'ECONNABORTED' || error.code === 'ETIMEDOUT') {
      const config = error.config;
      if (!config || !config.retry) {
        console.log('===============响应错误！打印error！====================');
        console.log(error);
        console.log('===============响应错误！！打印结束！！！！==============');
        return Promise.reject(error);
      }
      config.__retryCount = config.__retryCount || 0;
      if (config.__retryCount >= config.retry) {
        console.log('===============响应错误！打印error！====================');
        console.log('=======重发次数已用完============');
        console.log(error);
        console.log('===============响应错误！！打印结束！！！！==============');
        return Promise.reject(error);
      }
      // 定义一个延迟的方法，也可以单独抽离出来做公共方法
      const backoff = new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, config.retryDelay || 1000);
      });
      // 延迟时间到后重新发起请求
      return backoff.then(() => {
        config.__retryCount++;
        console.log(
          `============第${config.__retryCount}次重发, 时间: ${dayjs().format()}==============`
        );
        return service(config);
      });
    }
  }
);

export default service;
