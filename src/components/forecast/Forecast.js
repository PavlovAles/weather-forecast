import React from 'react';
import { useSelector } from 'react-redux';
import WeatherCard from '../weatherCard/WeatherCard';
import styles from './Forecast.module.css';
import TableRow from './tableRow/TableRow';

function Forecast({ weather, city }) {

  const forecast = useSelector(state => state.weather.forecast);

  return (
    <section className={styles.container}>
      <WeatherCard weather={weather} city={city} />
      <table className={styles.table} >
        <tbody>
          <tr>
            <th className={styles.tableHeading} >
              Время
            </th>
            <th className={styles.tableHeading}>
              Погода
            </th>
            <th className={styles.tableHeading}>
              Ветер
            </th>
            <th className={styles.tableHeading}>
              Влажность
            </th>
          </tr>
          {forecast.map((dayForecast) => <TableRow weather={dayForecast} key={dayForecast.dt}/>)}
        </tbody>
      </table>
    </section>
  )
}

export default Forecast;
