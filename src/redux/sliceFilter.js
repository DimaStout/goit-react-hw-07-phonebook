import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

export const sliceFilter = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterContacts: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { filterContacts } = sliceFilter.actions;
export const getFilter = state => state.filter.filter;
export default sliceFilter.reducer;
