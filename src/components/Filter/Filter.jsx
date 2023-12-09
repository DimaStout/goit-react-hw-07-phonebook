import React from 'react';
import s from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts, getFilter } from '../../redux/sliceFilter';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  return (
    <>
      <p className={s.title}>Find contacts by name</p>
      <input
        className={s.inpt}
        type="text"
        value={filter}
        onChange={event => dispatch(filterContacts(event.target.value.trim()))}
      />
    </>
  );
};

export default Filter;
