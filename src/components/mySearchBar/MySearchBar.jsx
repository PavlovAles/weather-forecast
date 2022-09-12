import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getWeather } from '../../store/weatherSlice';
import cities from '../../utils/cities';
import styles from './MySearchBar.module.css';

export default function MySearchBar() {
  const [inputValue, setInputValue] = useState('');
  const [showDropDown, setShowDropDown] = useState(false);
  const [options, setOptions] = useState(cities);
  const [activeOption, setActiveOption] = useState(-1);

  const dispatch = useDispatch();

  function closeAndReset() {
    setShowDropDown(false);
    setInputValue('');
    setOptions(cities);
    setActiveOption(-1);
  }

  function handleClickOutside(e) {
    if (!e.target.classList[0].includes('searchBar')) {
      closeAndReset();
      document.removeEventListener('click', handleClickOutside);
    }
  }

  function handleInputClick() {
    setShowDropDown(true);
    document.addEventListener('click', handleClickOutside);
  }

  function handleKeyDown(e) {
    if (e.code === 'Escape') {
      closeAndReset();
    }
    if (e.code === 'Enter') {
      const city = options[activeOption];
      dispatch(getWeather({ name: city.label, coord: city.coord }));
      closeAndReset();
    }
    if (showDropDown && (e.code === 'ArrowDown' || e.code === 'ArrowUp')) {
      const step = e.code === 'ArrowDown' ? 1 : -1;
      setActiveOption((prev) => {
        if (prev < 0 || prev + step < 0) {
          return 0;
        }
        if (prev + step === options.length) {
          return options.length - 1;
        }
        return prev + step;
      });
    }
  }

  function handleChange(e) {
    setInputValue(e.target.value);
    const input = e.target.value.toLowerCase();
    if (!input) {
      setOptions(cities);
      setActiveOption(0);
      return;
    }
    const filteredOptions = cities.filter((city) => city.label.toLowerCase().includes(input));
    setOptions(filteredOptions);
    setActiveOption(0);
    setShowDropDown(true);
  }

  function handleOptionClick(e) {
    if (e.target.classList[0].includes('searchBarOption')) {
      closeAndReset();
      const city = options.find((i) => i.label === e.target.textContent);
      dispatch(getWeather({ name: city.label, coord: city.coord }));
      setShowDropDown(false);
    }
  }

  function renderOption(option, ind) {
    return (
      <li
        key={option.value}
        className={
          ind === activeOption
            ? styles.searchBarOption_active
            : styles.searchBarOption
        }
      >
        {option.label}
      </li>
    );
  }

  return (
    <div className={styles.searchBar}>
      <input
        className={styles.searchBarInput}
        value={inputValue}
        type="text"
        placeholder="Город"
        onClick={handleInputClick}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      {showDropDown && (
        <ul className={styles.searchBarDropDown} onClick={handleOptionClick}>
          {options.map(renderOption)}
          {!options.length && (
            <li className={styles.searchBarNoOption}>Ничего не найдено</li>
          )}
        </ul>
      )}
    </div>
  );
}
