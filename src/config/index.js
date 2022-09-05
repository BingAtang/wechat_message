import dayjs from "dayjs";

const zhazha = "ozIIy6bivVnfJ0e1ydJGDWZZ3gZU";
const taotao = "ozIIy6alpmO2vvsAmNTP-y00fBSE";

export const params = {
  appid: "wxc988a48df4f1fc38",
  secret: "4b959257ce9eaaff96f0d2440cc13c20",
  touser: zhazha,
  template_id: "V9_8Zc0p1t0GsvjHEhryUUvdTYM2c85V0rKl8HdDRp8",
};

export const getListConfig = ({ daytemp, nighttemp, week, dayweather, nightweather }, city) => {
  const weathertext = (text) => {
    switch (text) {
      case "晴":
        return "晴空万里";
      default:
        return text;
    }
  };

  const weatherInfo =
    dayweather === nightweather
      ? `一整天都${weathertext(dayweather)}`
      : `白天${weathertext(dayweather)}，晚上${weathertext(nightweather)}`;

  const data = {
    nowDate: {
      value: `今天是${dayjs().format("YYYY-MM-DD")}，星期${week}`,
      color: "#57E6E2",
    },

    weather: {
      value: `今天的${city} ${weatherInfo}`,
      color: "#9CA2A0",
    },

    tips: {
      value: "这是一条温馨小提醒，内容待完善",
    },

    low: {
      value: `${nighttemp}℃`,
      color: "#7CD47D",
    },
    high: {
      value: `${daytemp}℃`,
      color: "#CBA476",
    },
    loveDate: {
      value: dayjs().diff("2021-7-8", "day"),
      color: "#AEC5C8",
    },
    txt: {
      value: "我习惯在包里藏一瓶百无聊赖，打发人间的白云和苍狗设计睡着的未来",
      color: "#3C4244",
    },
  };

  return data;
};
