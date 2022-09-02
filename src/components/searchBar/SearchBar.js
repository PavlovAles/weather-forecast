import React from 'react';
import Select from 'react-select';
import { cityList } from '../../cityList';
import { useDispatch } from 'react-redux';
import { fetchCurrentWeather } from '../../store/weatherSlice';

const cityListOrdered = cityList.sort((a, b) => a.label.localeCompare(b.label));

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
      options={cityListOrdered}
      placeholder='Город'
      styles={styleWidth}
    />
  )
}

export default SearchBar;