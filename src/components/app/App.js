import React from 'react';
import styles from './App.module.css';
import Header from '../header/Header';
import SearchBar from '../searchBar/SearchBar';
import { useSelector } from 'react-redux';
import WeatherCard from '../weatherCard/WeatherCard';

function App() {
  const city = useSelector(state => state.weather.city);
  const weather = useSelector(state => state.weather.weather);

  console.log(city, weather);

  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.content}>
        <SearchBar />
        {weather ? <WeatherCard /> : null}
      </div>
    </div>
  );
}

export default App;
