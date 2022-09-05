import React from 'react';
import Select from 'react-select';
import { cities } from '../../cities';
import { useDispatch } from 'react-redux';
import { fetchCurrentWeather } from '../../store/weatherSlice';

function SearchBar() {
  const dispatch = useDispatch();

  const styleWidth = {
     container: (provided, state) => ({
      ...provided,
      width: '100%',
      maxWidth: '703px',
    }),
  }

  return (
    <Select
      onChange={(value) => dispatch(fetchCurrentWeather(value))}
      options={cities}
      placeholder='Город'
      styles={styleWidth}
    />
  )
}

export default SearchBar;