import React from 'react';
import styles from './Footer.module.css';
import logoPath from '../../images/openweather.jpeg';

function Footer() {
  return (
    <footer className={styles.footer}>
        <img className={styles.logo} src={logoPath} alt='Логотип OpenWeatherAPI' />
        <p className={styles.text}>Алесь Павлов, 2022г.</p>
    </footer>
  )
}

export default Footer;