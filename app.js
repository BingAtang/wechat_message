import { params, getListConfig } from "./src/config/index.js";
import getToken from "./src/getToken/index.js";
import sendMessage from "./src/sendMessage/index.js";
import getWheather from "./src/getWheather/index.js";

function start() {
  const cityCOde = "110114";

  Promise.all([getToken(params), getWheather(cityCOde)]).then((responses) => {
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
