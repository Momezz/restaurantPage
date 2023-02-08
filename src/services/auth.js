import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const login = createAsyncThunk(
  'auth/login',
  async (user) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    };

    const res = await fetch(`${BASE_URL}/auth/local/login`, options);
    const result = await res.json();
    // if (result) {
    //  localStorage.setItem('token', result.token);
    //  localStorage.setItem('role', JSON.stringify(result.user.role));
    // }
    return result;
  },
);

export const validateUserMailToken = async (token) => {
  const response = await fetch(`${BASE_URL}/auth/local/activate/${token}`);
  const data = response.json();

  return data;
};

export const convert = (value) => {
  if (value === undefined || value === 'USER' || value === '') {
    return false;
  }
  return true;
};
