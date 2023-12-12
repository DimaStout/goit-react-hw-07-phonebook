import React from 'react';
import s from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactThunk, setFilter } from '../../redux/sliceContact';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();

  const onDeleteContact = id => {
    dispatch(deleteContactThunk(id));
  };

  const onSetFilter = filter => {
    dispatch(setFilter(filter));
  };

  if (!contacts.length) {
    return <p>No contacts found.</p>;
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Filter contacts..."
        onChange={e => onSetFilter(e.target.value)}
      />
      <ul className={s.ul}>
        {contacts.map(({ id, name, number }) => (
          <li className={s.list} key={id}>
            <p>
              {name}: {number}
            </p>
            <button className={s.btn} onClick={() => onDeleteContact(id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
