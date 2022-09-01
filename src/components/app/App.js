import React from 'react';
import styles from './App.module.css';
import Header from '../header/Header';
import SearchBar from '../searchBar/SearchBar';

function App() {
  return (
    <div>
      <Header />
      <div className={styles.content}>
        <SearchBar />
      </div>
    </div>
  );
}

export default App;
