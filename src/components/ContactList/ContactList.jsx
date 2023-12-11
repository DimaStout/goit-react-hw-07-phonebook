import React, { useEffect } from 'react';
import s from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteContactThunk,
  fetchAllContactsThunk,
  getContacts,
} from '../../redux/sliceContact';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContactsThunk());
  }, [dispatch]);

  const onDeleteContact = id => {
    dispatch(deleteContactThunk(id));
  };

  if (!contacts.length) {
    return <p>No contacts found.</p>;
  }

  return (
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
  );
};

export default ContactList;
