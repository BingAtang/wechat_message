import { params, listConfig } from "./src/config/index.js";
import getToken from "./src/getToken/index.js";
import sendMessage from "./src/sendMessage/index.js";

async function start() {
  const { data } = await getToken(params);

  if (!data) {
    console.log("!data");
    return;
  }
  console.log(listConfig.startDay);
  // const { access_token } = data;
  // const msgResponse = await sendMessage({
  //   ...params,
  //   access_token,
  //   ...listConfig,
  // });
  // if (msgResponse) {
  //   console.log(msgResponse);
  // }
}

start();
