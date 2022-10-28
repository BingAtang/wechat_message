import service from '../services/index.js';
const getToken = async (params) => {
  const { data } = await service.get(
    `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${params.appid}&secret=${params.secret}`
  );
  return data.access_token;
};

export default getToken;
