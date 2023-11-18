/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const shoppingSlice = createSlice({
  name: 'shopping',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload,
      );
    },
    resetCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, resetCart } = shoppingSlice.actions;
export default shoppingSlice.reducer;
