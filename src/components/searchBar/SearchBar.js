import React, { useState } from 'react';
import Select from 'react-select';
import { cityList } from '../../cityList';

const cityListOrdered = cityList.sort((a,b) => a.label.localeCompare(b.label));

function SearchBar() {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <Select
      value={selectedOption}
      onChange={setSelectedOption}
      options={cityListOrdered}
      placeholder='Город'
    />
  )
}

export default SearchBar;