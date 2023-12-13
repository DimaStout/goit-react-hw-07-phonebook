import React from 'react';
import s from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactThunk, setFilter } from '../../redux/sliceContact';
import {
  deleteContactThunk,
  fetchAllContactsThunk,
  getContacts,
} from '../../redux/sliceContact';
import { deleteContactThunk, getContacts } from '../../redux/sliceContact';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();

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
