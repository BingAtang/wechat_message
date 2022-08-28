import dayjs from "dayjs";

export const params = {
  appid: "wxc988a48df4f1fc38",
  secret: "4b959257ce9eaaff96f0d2440cc13c20",
  touser: "ozIIy6bivVnfJ0e1ydJGDWZZ3gZU",
  template_id: "X0LSCsPlDKaYWd3Bi-6SJ9XEjqyfoJS2mC1-G7U0SZI",
};

const template = {
  //   {{nowDate.DATA}} 城市：{{city.DATA}}
  // 天气： {{weather.DATA}}
  // 最低气温： {{low.DATA}}
  // 最高气温： {{high.DATA}}
  // 今天是我们恋爱的 {{loveDate.DATA}} 天
  // {{txt.DATA}}
};

export const listConfig = {
  data: {
    nowDate: {
      value: `今天是${dayjs().format("YYYY-MM-DD")} `,
      color: "#57E6E2",
    },
    city: {
      value: "北京",
      color: "#9CA2A0",
    },
    low: {
      value: "29℃",
      color: "#7CD47D",
    },
    high: {
      value: "30℃",
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
  },
};
