import React from 'react';
import s from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, getContacts } from '../../redux/sliceContact';
import { getFilter } from '../../redux/sliceFilter';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  if (!filteredContacts.length) {
    return <p>No contacts found.</p>;
  }

  return (
    <ul className={s.ul}>
      {filteredContacts.map(({ id, name, number }) => (
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
