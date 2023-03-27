import React from 'react';

const Filter = ({ value, onChange }) => (
  <label style={{ fontSize: '22px' }} htmlFor="">
    Find contacts by name
    <input
      style={{ marginLeft: '10px' }}
      type="text"
      value={value}
      onChange={onChange}
    />
  </label>
);

export default Filter;
