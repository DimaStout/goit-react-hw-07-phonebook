import React from 'react';
import s from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/sliceContact';
import { nanoid } from '@reduxjs/toolkit';

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const contact = {
      id: nanoid(),
      name: event.currentTarget.elements.name.value,
      number: event.currentTarget.elements.number.value,
    };

    dispatch(addContact(contact));
    event.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label className={s.label}>
        <p className={s.title}>Name</p>
        <input
          className={s.input}
          type="text"
          name="name"
          placeholder="Name"
          required
        />
      </label>
      <label className={s.label}>
        <p className={s.title}>Number</p>
        <input
          className={s.input}
          type="tel"
          name="number"
          placeholder="Phone Number"
          required
        />
      </label>
      <button className={s.button}>Add contact</button>
    </form>
  );
};

export default ContactForm;
