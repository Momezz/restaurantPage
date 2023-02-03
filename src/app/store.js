import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/users/usersSlice';
import menuReducer from '../features/menus/menusSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    menus: menuReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
