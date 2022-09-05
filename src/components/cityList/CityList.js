
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { roundToDec } from '../../utils/utils';
import styles from './CityList.module.css';

function CityList() {
  const bigCitiesWeather = useSelector(state => state.weather.bigCitiesWeather);

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Погода городах России</h3>
      <ul className={styles.list}>
        {bigCitiesWeather.map((city) => (
          <NavLink className={styles.link} to='/forecast' key={city.sys.id}>
            <li className={styles.city_group}>
              <img className={styles.icon} src={`http://openweathermap.org/img/wn/${city.weather[0].icon}.png`} alt='Иконка погоды' />
              <p className={styles.subtext}>{`${roundToDec(city.main.temp)}°`}</p>
              <h4 className={styles.subtext}>{city.name}</h4>
            </li>
          </NavLink>
        ))}
      </ul>
    </div >
  )
}

export default CityList;
