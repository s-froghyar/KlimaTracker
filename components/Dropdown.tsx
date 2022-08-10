import * as React from 'react';


const Dropdown = ({ label, value, options, onChange }: any) => {
    return (
      <label>
        {label}
        <select value={value} onChange={onChange}>
          {options.map((option: any) => (
            <option value={option.value} key={`input_option_${option.value}`}>{option.label}</option>
          ))}
        </select>
      </label>
    );
  };

export default Dropdown;