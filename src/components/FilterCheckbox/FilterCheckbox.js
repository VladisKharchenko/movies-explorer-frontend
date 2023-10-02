import React, { useState, useEffect } from 'react';

function FilterCheckbox({ checked, onChange }) {
  //const [localChecked, setLocalChecked] = useState(checked);

  /*useEffect(() => {
    localStorage.setItem('filterCheckboxChecked', localChecked);
  }, [localChecked]);*/

  /*const handleCheckboxChange = () => {
    const newChecked = !localChecked;
    setLocalChecked(newChecked);
    onChange(newChecked);
  };*/

  return (
    <label className="filterCheckbox">
      <input
        type="checkbox"
        className="filterCheckbox__input"
        checked={checked}
        onChange={onChange}
      />
      <div className="filterCheckbox__slider"></div>
    </label>
  );
}

export default FilterCheckbox;
