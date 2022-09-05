import React from 'react';
import Select from 'react-select';
import { cities } from '../../cities';
import { useDispatch, useSelector } from 'react-redux';
import { getWeather } from '../../store/weatherSlice';

function SearchBar() {
  const dispatch = useDispatch();
  const city = useSelector(state => state.weather.city);

  const styleWidth = {
    container: (provided, state) => ({
      ...provided,
      width: '100%',
      maxWidth: '703px',
    }),
  }

  return (
    <Select
      value={city?.name}
      onChange={(value) => dispatch(getWeather({ name: value.label, coord: value.coord }))}
      options={cities}
      placeholder='Город'
      styles={styleWidth}
    />
  )
}

export default SearchBar;