import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCityAndGetWeather } from '../../store/weatherSlice';
import cities from '../../utils/cities';
import styles from './MySearchBar.module.css';

export default function MySearchBar() {
  const [inputValue, setInputValue] = useState('');
  const [showDropDown, setShowDropDown] = useState(false);
  const [options, setOptions] = useState(cities);
  const [activeOption, setActiveOption] = useState(-1);
  const ref = useRef();

  const dispatch = useDispatch();

  function closeAndReset() {
    setShowDropDown(false);
    setInputValue('');
    setOptions(cities);
    setActiveOption(-1);
  }

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        closeAndReset();
      }
    }
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });

  function handleKeyDown(e) {
    if (e.code === 'Escape') {
      closeAndReset();
    }
    if (e.code === 'Enter') {
      if (!options.length || activeOption < 0) return;
      const city = options[activeOption];
      dispatch(setCityAndGetWeather(city));
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
    const filteredOptions = cities.filter((city) => city.name.toLowerCase().includes(input));
    setOptions(filteredOptions);
    setActiveOption(0);
    setShowDropDown(true);
  }

  function handleOptionClick(e) {
    if (e.target.classList[0].includes('searchBarOption')) {
      closeAndReset();
      const city = options.find((i) => i.name === e.target.textContent);
      dispatch(setCityAndGetWeather(city));
      setShowDropDown(false);
    }
  }

  function renderOption(option, ind) {
    return (
      <li
        key={option.id}
        className={
          ind === activeOption
            ? styles.searchBarOption_active
            : styles.searchBarOption
        }
      >
        {option.name}
      </li>
    );
  }

  return (
    <div className={styles.searchBar} ref={ref}>
      <input
        className={styles.searchBarInput}
        value={inputValue}
        type='text'
        placeholder='Город'
        onClick={() => setShowDropDown(true)}
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
