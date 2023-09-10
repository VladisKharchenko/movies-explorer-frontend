function FilterCheckbox({ checked, onChange }) {
  return (
    <label
      className="filterCheckbox"
      style={{ backgroundColor: checked ? '#2be080' : '#ebebeb' }}
    >
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
