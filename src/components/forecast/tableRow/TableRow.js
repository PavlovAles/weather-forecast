import React from 'react';
import styles from './TableRow.module.css';
import useWindowWidth from '../../../hooks/useWindowWidth';
import { roundToDec } from '../../../utils/utils';

import windIconPath from '../../../images/wind.svg';
import windDirectionPath from '../../../images/wind_direction.svg';
import dropIconPath from '../../../images/drop.svg';

function TableRow({ weather }) {
  const windowWidth = useWindowWidth();

  const weather_weather = weather.weather[0];

  let date = new Date(weather.dt * 1000);
  date = date.toLocaleString([], { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });

  return (
    <tr className={styles.tableRow}>
      <td>
        <p className={styles.date}>{date}</p>
      </td>
      <td>
        <div className={styles.additional__group}>
          <img className={styles.icon} src={`https://openweathermap.org/img/wn/${weather_weather.icon}.png`} alt='Иконка погоды' />
          <div className={styles.tempContainer}>
            <p className={styles.subtext}>{`${roundToDec(weather.main.temp)}°`}</p>
            <p className={styles.feelsLike}>{`${roundToDec(weather.main.feels_like)}°`}</p>
          </div>
          {(windowWidth > 460) && <p className={styles.description}>{weather_weather.description}</p>}
        </div>
      </td>
      <td>
        <div className={styles.additional__group}>
          <img className={styles.additional__icon} src={windIconPath} alt='Ветер' />
          <p className={styles.subtext}>{`${roundToDec(weather.wind.speed)} м/с`}</p>
          <img
            className={styles.additional__windDirection}
            style={{ transform: `rotate(${weather.wind.deg}deg)` }}
            src={windDirectionPath}
            alt='Направление ветра' />
        </div>
      </td>
      {(windowWidth > 600) && <td>
        <div className={styles.additional__group}>
          <img className={styles.additional__icon} src={dropIconPath} alt='Влажность' />
          <p className={styles.subtext}>{`${weather.main.humidity}%`}</p>
        </div>
      </td>}
    </tr>
  )
}

export default TableRow;