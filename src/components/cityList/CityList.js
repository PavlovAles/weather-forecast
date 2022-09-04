
import React from 'react';
import { useSelector } from 'react-redux';
import { roundToDec } from '../../utils/utils';
import styles from './CityList.module.css';

function CityList() {
  const city = useSelector(state => state.weather.city);
  const popularWeather = useSelector(state => state.weather.popularWeather);

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Погода городах России</h3>
      <ul className={styles.list}>
        {popularWeather.map((city) => (
          <li className={styles.city_group} key={city.sys.id}>
            <img className={styles.icon} src={`http://openweathermap.org/img/wn/${city.weather[0].icon}.png`} alt='Иконка погоды' />
            <p className={styles.subtext}>{`${roundToDec(city.main.temp)}°`}</p>
            <h4 className={styles.subtext}>{city.name}</h4>
          </li>
        ))}
      </ul>
    </div >
  )
}

export default CityList;
