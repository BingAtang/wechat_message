import axios from 'axios';

const gaodeKey = '76c1f7294bcf8e01e7723225c977ec0e';
const getWheather = async (cityCode) => {
  const { data } = await axios.get('https://restapi.amap.com/v3/weather/weatherInfo', {
    params: {
      key: gaodeKey,
      city: cityCode,
      extensions: 'all',
    },
  });
  return data.forecasts[0].casts[0];
};

export default getWheather;
