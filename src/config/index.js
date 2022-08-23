import dayjs from "dayjs";

export const params = {
  appid: "wxc988a48df4f1fc38",
  secret: "4b959257ce9eaaff96f0d2440cc13c20",
  touser: "ozIIy6bivVnfJ0e1ydJGDWZZ3gZU",
  template_id: "MvRjFukme2eXS_ahnqiOogr-5t8enRCVISSC2QY5WyM",
};

const startDay = new Date(2021, 8, 7);

export const listConfig = {
  startDay: dayjs(startDay).format("x"),
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
      value: "37℃",
      color: "#CBA476",
    },
    loveDate: {
      value: "999",
      color: "#AEC5C8",
    },

    txt: {
      value: "我习惯在包里藏一瓶百无聊赖，打发人间的白云和苍狗设计睡着的未来",
      color: "#3C4244",
    },
  },
};
