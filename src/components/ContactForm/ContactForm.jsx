import React from 'react';
import { useDispatch } from 'react-redux';
import { addContactThunk } from '../../redux/sliceContact';
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

    dispatch(addContactThunk(contact));
    event.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <p>Name</p>
        <input type="text" name="name" placeholder="Name" required />
      </label>
      <label>
        <p>Number</p>
        <input type="tel" name="number" placeholder="Phone Number" required />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
