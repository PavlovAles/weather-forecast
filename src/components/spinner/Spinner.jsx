import React from 'react';
import spinnerPath from '../../images/spinner.svg';
import styles from './Spinner.module.css';

function Spinner() {
  return (
    <img className={styles.spinner} src={spinnerPath} alt="Иконка спиннер" />
  );
}

export default Spinner;
