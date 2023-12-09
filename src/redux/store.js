import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './sliceContact';

const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
});

export default store;
