
import React from 'react';
import { useSelector } from 'react-redux';
import { roundToDec } from '../../utils/utils';
import styles from './CityList.module.css';

function CityList() {
  const city = useSelector(state => state.weather.city);
  const weather = useSelector(state => state.weather.weather);

  const weather_weather = weather.weather[0];
  const weather_main = weather.main;

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Погода городах России</h3>
      <ul className={styles.list}>
        <li className={styles.city_group}>
          <img className={styles.icon} src={`http://openweathermap.org/img/wn/${weather_weather.icon}.png`} alt='Иконка погоды' />
          <p className={styles.subtext}>{`${roundToDec(weather_main.temp)}°`}</p>
          <h4 className={styles.subtext}>{city}</h4>
        </li>
      </ul>
    </div >
  )
}

export default CityList;
