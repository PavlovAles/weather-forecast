import React, { useEffect } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  getLocationAndCurrentWeather,
  getBigCitiesWeather,
  setCityAndGetWeather,
} from '../../store/weatherSlice';
import styles from './App.module.css';
import Header from '../header/Header';
import WeatherCard from '../weatherCard/WeatherCard';
import CityList from '../cityList/CityList';
import Forecast from '../forecast/Forecast';
import Footer from '../footer/Footer';

function App() {
  const city = useSelector((state) => state.weather.city);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBigCitiesWeather());
    if (city) {
      dispatch(setCityAndGetWeather(city));
    }
    if (!city && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        dispatch(getLocationAndCurrentWeather(position.coords));
      });
    }
  }, []);

  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.content}>
        <Switch>
          <Route path='/forecast'>
            <Forecast />
          </Route>
          <Route exact path='/'>
            {(city) && (
              <Link
                className={styles.linkContainer}
                to='/forecast'
                onClick={() => dispatch(setCityAndGetWeather(city))}
              >
                <WeatherCard />
              </Link>
            )}
            <CityList />
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
