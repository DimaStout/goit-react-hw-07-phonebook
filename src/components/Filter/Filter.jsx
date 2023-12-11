import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/sliceContact';

const Filter = () => {
  const dispatch = useDispatch();
  const [filter, setFilterValue] = useState('');

  const handleChange = e => {
    setFilterValue(e.target.value);
    dispatch(setFilter(e.target.value));
  };

  return (
    <input
      type="text"
      placeholder="Filter contacts"
      value={filter}
      onChange={handleChange}
    />
  );
};

export default Filter;
