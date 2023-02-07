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
      // eslint-disable-next-line no-param-reassign
      state.items = state.items.filter(
        (item) => item.id !== action.payload.id,
      );
    },
  },
});

export const { addItem, removeItem } = shoppingSlice.actions;
export default shoppingSlice.reducer;
