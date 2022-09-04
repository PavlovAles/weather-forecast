import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLocationAndWeather, fetchPopularWeather } from '../../store/weatherSlice';
import styles from './App.module.css';
import Header from '../header/Header';
import WeatherCard from '../weatherCard/WeatherCard';
import CityList from '../cityList/CityList';

function App() {
  const dispatch = useDispatch();

  const weather = useSelector(state => state.weather.weather);
  const popularWeather = useSelector(state => state.weather.popularWeather);

  useEffect(() => {
    dispatch(fetchPopularWeather());

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        dispatch(fetchLocationAndWeather(position.coords))
      });
    }

  }, [dispatch])

  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.content}>
        {weather && <WeatherCard />}
        {popularWeather ? <CityList /> : null}
      </div>
    </div>
  );
}

export default App;
