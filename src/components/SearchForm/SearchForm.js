import React, { useEffect, useState } from 'react';
import SerchButton from '../SerchButton/SerchButton';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ onSearch, onToggle, isToggle, name, isLoading }) {
  const [searchText, setSearchText] = useState('');
  const [validationError, setValidationError] = useState('');

  useEffect(() => {
    if (name === 'movies') {
      const localSearchText = localStorage.getItem('keyword');
      if (localSearchText) {
        setSearchText(localSearchText);
      }
    }
  }, []);

  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchText) {
      setValidationError('Нужно ввести ключевое слово');
    } else {
      setValidationError('');
      onSearch(searchText);
    }
  };

  return (
    <section className="searchForm">
      <form onSubmit={handleSubmit} noValidate>
        <div className="searchForm__input-container">
          <input
            type="text"
            className="searchForm__input"
            placeholder="Фильм"
            required
            value={searchText}
            onChange={handleSearchTextChange}
          />
          {validationError && (
            <p className="searchForm__validation-error">{validationError}</p>
          )}
          <SerchButton isLoading={isLoading} />
        </div>
        <div className="filterCheckbox-container">
          <FilterCheckbox onChange={onToggle} checked={isToggle} />
          <p className="filterCheckbox-text">Короткометражки</p>
        </div>
        <div className="searchForm__line"></div>
      </form>
    </section>
  );
}

export default SearchForm;
