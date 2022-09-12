import React from 'react';
import { useSelector } from 'react-redux';
import useWindowWidth from '../../hooks/useWindowWidth';
import WeatherCard from '../weatherCard/WeatherCard';
import styles from './Forecast.module.css';
import TableRow from './tableRow/TableRow';
import TempChart from './tempChart/TempChart';

function Forecast() {
  const forecast = useSelector((state) => state.weather.forecast);
  const windowWidth = useWindowWidth();

  return (
    <section className={styles.container}>
      <WeatherCard />
      <TempChart forecast={forecast} />
      <table className={styles.table}>
        <tbody>
          <tr>
            <th className={styles.tableHeading}>Время</th>
            <th className={styles.tableHeading}>Погода</th>
            <th className={styles.tableHeading}>Ветер</th>
            {windowWidth > 600 && (
              <th className={styles.tableHeading}>Влажность</th>
            )}
          </tr>
          {forecast.map((dayForecast) => (
            <TableRow weather={dayForecast} key={dayForecast.dt} />
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Forecast;
