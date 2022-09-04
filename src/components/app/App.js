import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularWeather } from '../../store/weatherSlice';
import styles from './App.module.css';
import Header from '../header/Header';
import WeatherCard from '../weatherCard/WeatherCard';
import CityList from '../cityList/CityList';

function App() {
  const dispatch = useDispatch();

  const city = useSelector(state => state.weather.city);
  const weather = useSelector(state => state.weather.weather);
  const popularWeather = useSelector(state => state.weather.popularWeather);

  console.log(city, weather);

  useEffect(() => {
    dispatch(fetchPopularWeather());
  }, [dispatch])

  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.content}>
        {weather ? <WeatherCard /> : null}
        {popularWeather ? <CityList /> : null}
      </div>
    </div>
  );
}

export default App;
