import { params, getListConfig } from './src/config/index.js';
import getToken from './src/getToken/index.js';
import sendMessage from './src/sendMessage/index.js';
import getWheather from './src/getWheather/index.js';
import { getDailyQuto } from './src/service/getDailyQuto.js';
const beijingCode = '110114';
const huzhouCode = '330500';
const ZZJinshui = '410105';

function start() {
  Promise.all([getToken(params), getWheather(ZZJinshui), getDailyQuto()]).then((responses) => {
    const [config, weather, dailyQuto] = responses;
    const {
      data: { access_token },
    } = config;
    const listConfig = getListConfig(weather, '郑州', dailyQuto);

    sendMessage({
      ...params,
      access_token,
      listConfig,
    }).then(({ data }) => {
      console.log({ data });
    });
  });
}

start();
