import React, { useState } from 'react';
import styles from './MySearchBar.module.css'
import { cities } from '../../utils/cities';
import { useDispatch } from 'react-redux';
import { getWeather } from '../../store/weatherSlice';

export default function MySearchBar() {
  const [input, setInput] = useState('');
  const [showDropDown, setShowDropDown] = useState(false);
  const [options, setOptions] = useState(cities);

  const dispatch = useDispatch();

  function handleInputClick(e) {
    setShowDropDown(true);
    document.addEventListener('click', handleClickOutside);
  }

  function handleClickOutside(e) {
    if (!e.target.classList[0].includes('searchBar')) {
      closeAndReset()
      document.removeEventListener('click', handleClickOutside);
    }
  }

  function handleKeyDown(e) {
    if (e.code === 'Escape') {
      closeAndReset();
    }
  }

  function closeAndReset() {
    setShowDropDown(false);
    setInput('');
    setOptions(cities);
  }

  function handleChange(e) {
    setInput(e.target.value);
    const input = e.target.value.toLowerCase();
    if (!input) {
      setOptions(cities);
      return;
    }
    const filteredOptions = cities.filter(city => city.label.toLowerCase().includes(e.target.value));
    setOptions(filteredOptions);
  }

  function handleOptionClick(e) {
    if (e.target.classList[0].includes('searchBarOption')) {
      closeAndReset();
      const city = options.find(i => i.label === e.target.textContent);
      dispatch(getWeather({ name: city.label, coord: city.coord }));
      setShowDropDown(false);
    }
  }

  return (
    <div className={styles.searchBar}>
      <input
        className={styles.searchBarInput}
        value={input}
        type='text'
        placeholder='Город'
        onClick={handleInputClick}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      {showDropDown &&
        <ul className={styles.searchBarDropDown} onClick={handleOptionClick}>
          {options.map((option) => <li className={styles.searchBarOption} key={option.value}>{option.label}</li>)}
          {!options.length && <li className={styles.searchBarNoOption}>Ничего не найдено</li>}
        </ul>}
    </div>
  )
}
