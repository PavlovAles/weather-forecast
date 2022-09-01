import React from 'react';
import styles from './App.module.css';
import Header from '../header/Header';

function App() {
  return (
    <div>
      <Header />
      <div className={styles.content}/>
    </div>
  );
}

export default App;
