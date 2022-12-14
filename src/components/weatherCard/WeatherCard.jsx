import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import useContainerDimensions from '../../hooks/useContainerDimensions';
import getReadableLocalTime from '../../utils/getReadableLocalTime';

import styles from './WeatherCard.module.css';
import windIconPath from '../../images/wind.svg';
import windDirectionPath from '../../images/wind_direction.svg';
import dropIconPath from '../../images/drop.svg';
import gaugeIconPath from '../../images/gauge.svg';
import Spinner from '../spinner/Spinner';

function WeatherCard() {
  const containerRef = useRef();
  const { width } = useContainerDimensions(containerRef);
  const weather = useSelector((state) => state.weather.weather);
  const city = useSelector((state) => state.weather.city);
  const weatherLoading = useSelector((state) => state.weather.weatherLoading);

  const description = weather?.weather[0];
  const main = weather?.main;

  return (
    <div className={styles.container} ref={containerRef}>
      {weatherLoading && <Spinner />}
      {!weatherLoading && (
        <>
          <div className={styles.heading}>
            <h2 className={styles.title}>{city.name}</h2>
            <p className={styles.subtext}>
              {getReadableLocalTime(weather.timezone)}
            </p>
          </div>
          <div className={styles.summary}>
            <p className={styles.currentTemp}>
              {`${main.temp > 0 ? '+' : ''}${main.temp.toFixed(1)}°`}
            </p>
            <img
              className={styles.icon}
              src={`https://openweathermap.org/img/wn/${description.icon}@2x.png`}
              alt='Иконка погоды'
            />
            <div className={styles.description}>
              <p className={styles.subtext}>{description.description}</p>
              <p className={styles.subtext}>
                {`по ощущениям ${main.temp > 0 ? '+' : ''}${main.feels_like.toFixed(1)}°`}
              </p>
            </div>
          </div>
          <div
            className={styles.additional}
            style={{ flexDirection: `${width > 400 ? 'row' : 'column'}` }}
          >
            <div className={styles.additional__group}>
              <img
                className={styles.additional__icon}
                src={windIconPath}
                alt='Ветер'
              />
              <p className={styles.subtext}>{`${weather.wind.speed} м/с,`}</p>
              <img
                className={styles.additional__windDirection}
                style={{ transform: `rotate(${weather.wind.deg}deg)` }}
                src={windDirectionPath}
                alt='Направление ветра'
              />
            </div>
            <div className={styles.additional__group}>
              <img
                className={styles.additional__icon}
                src={dropIconPath}
                alt='Влажность'
              />
              <p className={styles.subtext}>{`${main.humidity}%`}</p>
            </div>
            <div className={styles.additional__group}>
              <img
                className={styles.additional__icon}
                src={gaugeIconPath}
                alt='Давление'
              />
              <p className={styles.subtext}>{`${main.pressure} мм рт. ст.`}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default WeatherCard;
