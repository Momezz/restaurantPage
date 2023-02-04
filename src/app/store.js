import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/users/usersSlice';
import uploadsReducer from '../features/uploads/uploadsSlice';
import menuReducer from '../features/menus/menusSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    menus: menuReducer,
    upload: uploadsReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
