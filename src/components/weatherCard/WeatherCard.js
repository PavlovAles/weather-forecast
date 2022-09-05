import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { roundToDec } from '../../utils/utils';
import { NavLink } from 'react-router-dom';
import styles from './WeatherCard.module.css';
import windIconPath from '../../images/wind.svg';
import windDirectionPath from '../../images/wind_direction.svg';
import dropIconPath from '../../images/drop.svg';
import gaugeIconPath from '../../images/gauge.svg';
import { useContainerDimensions } from '../../hooks/useContainerDimensions';

function WeatherCard() {
  const containerRef = useRef();
  const { width } = useContainerDimensions(containerRef);

  const city = useSelector(state => state.weather.city);
  const weather = useSelector(state => state.weather.weather);

  const weather_weather = weather.weather[0];
  const weather_main = weather.main;

  let date = new Date(weather.dt * 1000);
  date = date.toLocaleString([], { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });

  return (
    <NavLink className={styles.container} to={'/forecast'} ref={containerRef}>
      <div className={styles.heading}>
        <h2 className={styles.title}>{city.name}</h2>
        <p className={styles.subtext}>{date}</p>
      </div>
      <div className={styles.summary}>
        <p className={styles.currentTemp}>{`${roundToDec(weather_main.temp)}°`}</p>
        <img className={styles.icon} src={`http://openweathermap.org/img/wn/${weather_weather.icon}@2x.png`} alt='Иконка погоды' />
        <div className={styles.description}>
          <p className={styles.subtext}>{weather_weather.description}</p>
          <p className={styles.subtext}>{`по ощущениям ${roundToDec(weather_main.feels_like)}°`}</p>
        </div>
      </div>
      <div className={styles.additional} style={{ flexDirection: `${width > 400 ? 'row' : 'column'}` }}>
        <div className={styles.additional__group}>
          <img className={styles.additional__icon} src={windIconPath} alt='Ветер' />
          <p className={styles.subtext}>{`${weather.wind.speed} м/с,`}</p>
          <img className={styles.windDirection} style={{ transform: `rotate(${weather.wind.deg}deg)` }} src={windDirectionPath} alt='Направление ветра' />
        </div>
        <div className={styles.additional__group}>
          <img className={styles.additional__icon} src={dropIconPath} alt='Влажность' />
          <p className={styles.subtext}>{`${weather_main.humidity}%`}</p>
        </div>
        <div className={styles.additional__group}>
          <img className={styles.additional__icon} src={gaugeIconPath} alt='Давление' />
          <p className={styles.subtext}>{`${weather_main.pressure} мм рт. ст.`}</p>
        </div>
      </div>
    </NavLink>
  )
}

export default WeatherCard;
