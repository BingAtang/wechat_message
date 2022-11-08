import { sendDailyMsgToWife, sendReportToMe } from './src/finalSend/index.js';

const start = () => {
  sendDailyMsgToWife()
    .then((res) => {
      sendReportToMe('success');
    })
    .catch((error) => {
      console.log('发消息接收到的error:', error);
      sendReportToMe('error', '消息发送失败', error);
    });
};

start();
