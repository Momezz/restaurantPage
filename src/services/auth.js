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
    return result;
  },
);

export const createUser = createAsyncThunk(
  'users/createUser',
  async (user) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    };

    const res = await fetch(`${BASE_URL}/api/users`, options);
    const result = await res.json();
    return result;
  },
);

export const convert = (value) => {
  if (value === undefined || value.role === 'USER' || value === '') {
    return false;
  }
  return true;
};

export const isEmptyObject = (obj) => Object.keys(obj).length === 0;
