import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/users/usersSlice';
import uploadsReducer from '../features/uploads/uploadsSlice';
import menuReducer from '../features/menus/menusSlice';
import bookingReducer from '../features/bookings/bookings';
import shoppingReducer from '../features/shopping/shoppingSlice';
import userLogin from '../features/auth/authSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    menus: menuReducer,
    upload: uploadsReducer,
    bookings: bookingReducer,
    shopping: shoppingReducer,
    login: userLogin,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
