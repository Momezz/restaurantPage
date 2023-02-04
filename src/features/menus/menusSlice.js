/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const initialState = {
  menus: [],
};

export const getMenus = createAsyncThunk('menus/getMenus', async () => {
  const response = await fetch(`${BASE_URL}/api/menu`);
  const data = await response.json();
  return data;
});

export const getMenuById = createAsyncThunk('menus/getMenuById', async (id) => {
  const response = await fetch(`${BASE_URL}/api/menu/${id}`);
  const data = await response.json();
  return data;
});

export const createMenu = createAsyncThunk('menus/createMenu', async (menu) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(menu),
  };

  const response = await fetch(`${BASE_URL}/api/menu/`, options);
  const data = await response.json();
  return data;
});

export const deleteMenu = createAsyncThunk('menus/deleteMenu', async (id) => {
  const options = {
    method: 'DELETE',
  };

  await fetch(`${BASE_URL}/api/menus/${id}`, options);
  return id;
});

export const updateMenu = createAsyncThunk('menus/updateMenu', async (menu) => {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(menu),
  };

  const response = await fetch(`${BASE_URL}/api/menus/${menu._id}`, options);
  const data = await response.json();
  return data;
});

const menusSlice = createSlice({
  name: 'menus',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getMenus.fulfilled, (state, action) => {
      state.menus = action.payload;
    });
    builder.addCase(createMenu.fulfilled, (state, action) => {
      state.menus = action.payload;
    });
    builder.addCase(deleteMenu.fulfilled, (state, action) => {
      const { menus } = current(state);
      state.menus = menus.filter((r) => r._id !== action.payload);
    });
    builder.addCase(updateMenu.fulfilled, (state, action) => {
      const { menus } = current(state);
      const menusUpdated = menus.map((r) => {
        if (r._id === action.payload._id) {
          return { ...r, ...action.payload };
        }
        return r;
      });
      state.menus = menusUpdated;
    });
  },
});

export default menusSlice.reducer;
