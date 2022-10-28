import service from '../services/index.js';

const sendMessage = (data) => {
  console.log('sending');
  return service.post(
    `https://api.weixin.qq.com/cgi-bin/message/template/send?access_token=${data.token}`,
    {
      touser: data.touser,
      template_id: data.template_id,
      data: data.listConfig || {},
    }
  );
};

export default sendMessage;
