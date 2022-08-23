import axios from "axios";

const getToken = (params) => {
  if (!params) {
    console.log("paramserror");
    return;
  }
  return axios.get(`https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${params.appid}&secret=${params.secret}`);
};

export default getToken;
