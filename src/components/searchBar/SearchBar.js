import React from 'react';
import Select from 'react-select';
import { cityList } from '../../cityList';
import { useDispatch } from 'react-redux';
import { fetchWeather } from '../../store/weatherSlice';

const cityListOrdered = cityList.sort((a, b) => a.label.localeCompare(b.label));

function SearchBar() {
  const dispatch = useDispatch();

  return (
    <Select
      onChange={(value) => dispatch(fetchWeather(value))}
      options={cityListOrdered}
      placeholder='Город'
    />
  )
}

export default SearchBar;