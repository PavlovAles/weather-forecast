import axios from 'axios';

const BASE_URL = 'https://api.openweathermap.org';
const queryParams = {
  appid: 'b18902f68153db12e44ee147bb59bcf2',
  units: 'metric',
  lang: 'ru',
}

export function fetchLocationAndCurrentWeather(position) {
  return Promise.all([
    axios.get(`${BASE_URL}/geo/1.0/reverse`, {
      params: {
        ...queryParams,
        lat: position.latitude,
        lon: position.longitude,
      }
    }),
    axios.get(`${BASE_URL}/data/2.5/weather`, {
      params: {
        ...queryParams,
        lat: position.latitude,
        lon: position.longitude,
      }
    })
  ])
    .then(([location, weather]) => [location.data[0], weather.data])
}

export function fetchWeather(coord) {
  return Promise.all([
    axios.get(`${BASE_URL}/data/2.5/weather`, {
      params: {
        ...queryParams,
        lat: coord.lat,
        lon: coord.lon,
      }
    }),
    axios.get(`${BASE_URL}/data/2.5/forecast`, {
      params: {
        ...queryParams,
        lat: coord.lat,
        lon: coord.lon,
      }
    }),
  ])
    .then(([weather, forecast]) => [weather.data, forecast.data.list])
}

export function fetchBigCitiesWeather() {
  return Promise.all([
    axios.get(`${BASE_URL}/data/2.5/weather`, { params: { ...queryParams, id: 524894 } }),
    axios.get(`${BASE_URL}/data/2.5/weather`, { params: { ...queryParams, id: 536203 } }),
    axios.get(`${BASE_URL}/data/2.5/weather`, { params: { ...queryParams, id: 491422 } }),
    axios.get(`${BASE_URL}/data/2.5/weather`, { params: { ...queryParams, id: 501175 } }),
    axios.get(`${BASE_URL}/data/2.5/weather`, { params: { ...queryParams, id: 472757 } }),
    axios.get(`${BASE_URL}/data/2.5/weather`, { params: { ...queryParams, id: 520555 } }),
    axios.get(`${BASE_URL}/data/2.5/weather`, { params: { ...queryParams, id: 1496747 } }),
  ])
}