import React from 'react';
import '../styles/FilterDropDownList.css';

const FilterDropdownList = ({ value, onChange, headValue, options }) => {
  return (
    <select value={value} onChange={onChange}>
      <option key={headValue} value=''>
        {headValue}
      </option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default FilterDropdownList;