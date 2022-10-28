import { sendDailyMsgToWife, sendReportToMe } from './src/finalSend/index.js';

const start = () => {
  sendDailyMsgToWife()
    .then((res) => {
      sendReportToMe('success');
    })
    .catch((error) => {
      sendReportToMe('error', '消息发送失败', error);
    });
};

start();
