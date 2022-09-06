import { params, getListConfig } from "./src/config/index.js";
import getToken from "./src/getToken/index.js";
import sendMessage from "./src/sendMessage/index.js";
import getWheather from "./src/getWheather/index.js";

const beijingCode = "110114";
const huzhouCode = "330500";

function start() {
  Promise.all([getToken(params), getWheather(beijingCode)]).then((responses) => {
    const [config, weather] = responses;
    const {
      data: { access_token },
    } = config;
    const listConfig = getListConfig(weather, "北京");
    console.log(weather);
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
