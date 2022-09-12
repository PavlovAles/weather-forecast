import React from 'react';
import spinnerPath from '../../images/spinner.svg';
import styles from './Spinner.module.css';

function Spinner() {
  return (
    <div className={styles.spinner}>
      <img className={styles.image} src={spinnerPath} alt='Иконка спиннер' />
    </div>
  );
}

export default Spinner;
