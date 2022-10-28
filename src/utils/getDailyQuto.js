import service from '../services/index.js';

const getDailyQuto = async () => {
  const {
    data: {
      data: { content },
    },
  } = await service.post('https://api.xygeng.cn/one');
  return content;
};
export default getDailyQuto;
