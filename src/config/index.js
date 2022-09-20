import dayjs from 'dayjs';

const zhazha = 'ozIIy6bivVnfJ0e1ydJGDWZZ3gZU';
const taotao = 'ozIIy6alpmO2vvsAmNTP-y00fBSE';

export const params = {
  appid: 'wxc988a48df4f1fc38',
  secret: '4b959257ce9eaaff96f0d2440cc13c20',
  touser: taotao,
  template_id: 'V9_8Zc0p1t0GsvjHEhryUUvdTYM2c85V0rKl8HdDRp8',
};

export const getListConfig = (
  { daytemp, nighttemp, week, dayweather, nightweather },
  city,
  dailyQuto
) => {
  // TODO: 天气转义。暂定如此，后续转为对象的k-v模式，根据接口返回的天气现象获取对应的textvalue
  const weathertext = (text) => {
    switch (text) {
      case '晴':
        return '晴空万里';
      case '阴':
        return 'miu太阳啦';
      case '多云':
        return '云层厚厚';
      case '雨':
        return '要下雨咯';
      default:
        return text;
    }
  };
  // 天气一样时修改文案
  const weatherInfo =
    dayweather === nightweather
      ? `一整天都${weathertext(dayweather)}`
      : `白天${weathertext(dayweather)}，晚上${weathertext(nightweather)}`;

  // 星期转化为汉字
  const weekList = { 1: '一', 2: '二', 3: '三', 4: '四', 5: '五', 6: '六', 7: '日' };

  //小提醒模块，目前只会根据天气给与提醒
  const littleTips = () => {};

  const data = {
    nowDate: {
      value: `今天是${dayjs().format('YYYY-MM-DD')}，星期${weekList[week]}`,
      color: '#57E6E2',
    },

    weather: {
      value: `今天的${city} ${weatherInfo}`,
      color: '#9CA2A0',
    },

    tips: {
      value: '小提醒开发中...',
    },

    low: {
      value: `${nighttemp}℃`,
      color: '#7CD47D',
    },
    high: {
      value: `${daytemp}℃`,
      color: '#CBA476',
    },
    loveDate: {
      value: dayjs().diff('2021-7-8', 'day'),
      color: '#AEC5C8',
    },
    txt: {
      value: dailyQuto,
      color: '#3C4244',
    },
  };

  return data;
};
