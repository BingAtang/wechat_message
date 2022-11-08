import { myInfo, myWifeInfo, getListConfigForWife, getReportList } from '../config/infos.js';
import getDailyQuto from '../utils/getDailyQuto.js';
import getToken from '../utils/getToken.js';
import getWheather from '../utils/getWheather.js';
import sendMessage from '../utils/sendMsg.js';
import dayjs from 'dayjs';

const cityInfos = {
  ZhengZhou: {
    name: '郑州',
    code: '410105',
  },
  beijing: {
    name: '北京',
    code: '110114',
  },
};

export const sendDailyMsgToWife = async () => {
  try {
    const token = await getToken(myWifeInfo);
    console.log(`${dayjs().format()}， 开始请求高德接口`);
    const weather = await getWheather(cityInfos.ZhengZhou.code);
    console.log(`${dayjs().format()}， 请求高德接口结束`);
    const dailyQuto = await getDailyQuto();

    const listConfig = getListConfigForWife(weather, cityInfos.ZhengZhou.name, dailyQuto);
    const res = await sendMessage({
      ...myWifeInfo,
      token,
      listConfig,
    });
    console.log(res);
    return res;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const sendReportToMe = async (result, errorType, errorInfo) => {
  const token = await getToken(myInfo);

  const listConfig = getReportList(result, errorType, errorInfo);

  const res = sendMessage({
    ...myInfo,
    token,
    listConfig,
  });

  return res;
};
