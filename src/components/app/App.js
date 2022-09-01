import React from 'react';
import styles from './App.module.css';
import Header from '../header/Header';
import SearchBar from '../searchBar/SearchBar';
import { useSelector } from 'react-redux';

function App() {
  const city = useSelector(state => state.weather.city);
  const forecast = useSelector(state => state.weather.forecast);

  console.log(city, forecast);

  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.content}>
        <SearchBar />
      </div>
    </div>
  );
}

export default App;
