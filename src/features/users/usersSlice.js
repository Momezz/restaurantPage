/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createUser, updateUser } from '../../services/users';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const initialState = {
  userData: [],
};
export const getUserById = createAsyncThunk('users/getUserById', async (id) => {
  const response = await fetch(`${BASE_URL}/api/users/${id}`);
  const data = await response.json();
  return data;
});

const usersSlice = createSlice({
  name: 'userData',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getUserById.fulfilled, (state, action) => {
      state.userData = action.payload;
    });
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.userData = action.payload;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.userData = action.payload;
    });
  },
});

export default usersSlice.reducer;
