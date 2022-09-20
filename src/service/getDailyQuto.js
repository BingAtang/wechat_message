import axios from 'axios';

export const getDailyQuto = async () => {
  const {
    data: {
      data: { content },
    },
  } = await axios.post('https://api.xygeng.cn/one');
  return content;
};
