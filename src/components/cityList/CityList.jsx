import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCityAndGetWeather } from '../../store/weatherSlice';
import Spinner from '../spinner/Spinner';
import styles from './CityList.module.css';

function CityList() {
  const dispatch = useDispatch();
  const bigCitiesWeather = useSelector(
    (state) => state.weather.bigCitiesWeather,
  );
  const bigCitiesLoading = useSelector(
    (state) => state.weather.bigCitiesLoading,
  );

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Погода городах России</h3>
      {bigCitiesLoading && <Spinner />}
      {!bigCitiesLoading && (
        <ul className={styles.list}>
          {bigCitiesWeather.map((city) => (
            <Link
              className={styles.link}
              to='/forecast'
              key={city.sys.id}
              onClick={() => dispatch(setCityAndGetWeather(city))}
            >
              <li className={styles.city_group}>
                <img
                  className={styles.icon}
                  src={`https://openweathermap.org/img/wn/${city.weather[0].icon}.png`}
                  alt='Иконка погоды'
                />
                <p className={styles.subtext}>
                  {`${city.main.temp > 0 ? '+' : ''}${city.main.temp.toFixed(1)}°`}
                </p>
                <h4 className={styles.subtext}>{city.name}</h4>
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CityList;
