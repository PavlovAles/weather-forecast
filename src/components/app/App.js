import React from 'react';
import styles from './App.module.css';
import Header from '../header/Header';
import SearchBar from '../searchBar/SearchBar';
import { useSelector } from 'react-redux';

function App() {
  const city = useSelector(state => state.cities.city);
  return (
    <div>
      <Header />
      <div className={styles.content}>
        <SearchBar />
        <p>{city ? city.label : ''}</p>
      </div>
    </div>
  );
}

export default App;
