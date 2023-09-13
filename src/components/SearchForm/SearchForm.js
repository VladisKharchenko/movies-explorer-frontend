import SerchButton from '../SerchButton/SerchButton.js';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox.js';
import React, { useState } from 'react';

function SearchForm() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <section className="searchForm">
      <form>
        <div className="searchForm__input-container">
          <input
            className="searchForm__input"
            placeholder="Фильм"
            required
          ></input>
          <SerchButton />
        </div>
        <div className="filterCheckbox-container">
          <FilterCheckbox checked={isChecked} onChange={handleCheckboxChange} />
          <p className="filterCheckbox-text">Короткометражки</p>
        </div>
        <div className="searchForm__line"></div>
      </form>
    </section>
  );
}

export default SearchForm;
