import React from 'react';
import { useSelector } from 'react-redux';
import styles from './WeatherCard.module.css';

function WeatherCard() {
  const city = useSelector(state => state.weather.city);
  const weather = useSelector(state => state.weather.weather);

  const weather_weather = weather.weather[0];
  const weather_main = weather.main;

  let date = new Date(weather.dt * 1000);
  date = date.toLocaleString();

  return (
    <div className={styles.container}>
      <h1>{city}</h1>
      <p>{date}</p>
      <div>
        <p className={styles.desription}>{weather_weather.description}</p>
        <img src={`http://openweathermap.org/img/wn/${weather_weather.icon}@2x.png`} alt='Иконка погоды'/>
        <p className={styles.currentTemp}>{`Температура ${weather_main.temp}°C`}</p>
        <p className={styles.feelsLike}>{`Ощущается как ${weather_main.feels_like}°C`}</p>
        <p className={styles.feelsLike}>{`Ветер ${weather.wind.speed} м/с`}</p>
        <p className={styles.feelsLike}>{`Влажность ${weather_main.humidity}%`}</p>
        <p className={styles.feelsLike}>{`Давление ${weather_main.pressure} мм рт. ст.`}</p>
      </div>
    </div>
  )
}

export default WeatherCard;
