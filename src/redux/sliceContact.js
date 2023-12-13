<<<<<<< HEAD
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6549fab3e182221f8d524207.mockapi.io';

export const fetchAllContactsThunk = createAsyncThunk(
  'fetchAll',
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get('contacts');
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'addContact',
  async (body, thunkApi) => {
    try {
      const { data } = await axios.post('contacts', body);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'deleteContact',
  async (id, thunkApi) => {
    try {
      await axios.delete(`contacts/${id}`);
      return id;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
=======
import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addContactThunk,
  deleteContactThunk,
  fetchAllContactsThunk,
} from './operations';
>>>>>>> parent of 57ddb33 (goit-react-hw-07-phonebook-007)

const initialState = {
  contacts: [],
  loading: false,
  error: null,
};

const sliceContact = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        item => item.id !== action.payload
      );

      state.loading = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAllContactsThunk.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllContactsThunk.fulfilled, (state, action) => {
        state.contacts = action.payload;
        state.loading = false;
      })
      .addCase(fetchAllContactsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addContactThunk.fulfilled, (state, action) => {
        state.contacts.push(action.payload);
        state.loading = false;
      })
<<<<<<< HEAD
      .addCase(addContactThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteContactThunk.fulfilled, (state, action) => {
        state.contacts = state.contacts.filter(
          item => item.id !== action.payload
        );
        state.loading = false;
      })
      .addCase(deleteContactThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
=======
      .addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
        const contactIdToDelete = payload;
        state.contacts = state.contacts.filter(
          item => item.id !== contactIdToDelete
        );
        state.loading = false;
      })
      .addMatcher(
        isAnyOf(
          fetchAllContactsThunk.pending,
          addContactThunk.pending,
          deleteContactThunk.pending
        ),
        state => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchAllContactsThunk.rejected,
          addContactThunk.rejected,
          deleteContactThunk.rejected
        ),
        (state, { payload }) => {
          state.loading = false;
          state.error = payload;
        }
      );
>>>>>>> parent of 57ddb33 (goit-react-hw-07-phonebook-007)
  },
});

export const contactReducer = sliceContact.reducer;
<<<<<<< HEAD
export const { setFilter, deleteContact } = sliceContact.actions;

export default sliceContact;
=======
export const { addContact: addContactAction, deleteContact } =
  sliceContact.actions;
export {
  addContactThunk,
  deleteContactThunk,
  fetchAllContactsThunk,
  getContacts,
} from './operations';
>>>>>>> parent of 57ddb33 (goit-react-hw-07-phonebook-007)
