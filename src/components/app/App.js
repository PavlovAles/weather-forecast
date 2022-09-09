import React, { useEffect } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getLocationAndCurrentWeather, getBigCitiesWeather, getWeather } from '../../store/weatherSlice';
import styles from './App.module.css';
import Header from '../header/Header';
import WeatherCard from '../weatherCard/WeatherCard';
import CityList from '../cityList/CityList';
import Forecast from '../forecast/Forecast';
import Footer from '../footer/Footer';

function App() {
  const dispatch = useDispatch();

  const weatherLoading = useSelector(state => state.weather.weatherLoading);
  const bigCitiesLoading = useSelector(state => state.weather.bigCitiesLoading);
  const city = useSelector(state => state.weather.city);

  function handleLinkClick(city) {
    dispatch(getWeather({ name: city.name, coord: city.coord }));
  }

  useEffect(() => {
    dispatch(getBigCitiesWeather());
    if (city) {
      dispatch(getWeather(city));
    }
    if (!city && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        dispatch(getLocationAndCurrentWeather(position.coords))
      });
    }
  }, [])

  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.content}>
        <Switch>
          <Route path={'/forecast'}>
            {!weatherLoading && <Forecast />}
          </Route>
          <Route exact path={'/'} >
            {!weatherLoading && <Link className={styles.linkContainer} to={'/forecast'} onClick={() => handleLinkClick(city)}>
              <WeatherCard />
            </Link>}
            {!bigCitiesLoading && <CityList />}
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
