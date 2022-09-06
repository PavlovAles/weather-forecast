import React, { useEffect } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getLocationAndCurrentWeather, getBigCitiesWeather, getWeather } from '../../store/weatherSlice';
import styles from './App.module.css';
import Header from '../header/Header';
import WeatherCard from '../weatherCard/WeatherCard';
import CityList from '../cityList/CityList';
import Forecast from '../forecast/Forecast';

function App() {
  const dispatch = useDispatch();

  const weather = useSelector(state => state.weather.weather);
  const bigCitiesWeather = useSelector(state => state.weather.bigCitiesWeather);
  const city = useSelector(state => state.weather.city);

  function handleLinkClick(city) {
    dispatch(getWeather({ name: city.name, coord: city.coord}));
  }

  useEffect(() => {
    dispatch(getBigCitiesWeather());

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        dispatch(getLocationAndCurrentWeather(position.coords))
      });
    }

  }, [dispatch])

  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.content}>
        <Switch>
          <Route path={'/forecast'}>
            {weather && <Forecast />}
          </Route>
          <Route exact path={'/'} >
            {weather &&
            <NavLink className={styles.linkContainer} to={'/forecast'} >
              <WeatherCard onClick={() => handleLinkClick(city)} />
            </NavLink>
            }
            {bigCitiesWeather ? <CityList /> : null}
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
