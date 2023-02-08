/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { login } from '../../services/auth';

const initialState = {
  user: [],
};

const loggedUserSlice = createSlice({
  name: 'loggedUser',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      if (action.payload.token && action.payload.user.role) {
        localStorage.setItem('token', action.payload.token);
        localStorage.setItem('role', JSON.stringify(action.payload.user.role));
        state.user = action.payload;
      } else {
        localStorage.clear();
        state.user = action.payload;
      }
    });
  },
});

export default loggedUserSlice.reducer;
