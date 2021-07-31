import { configureStore } from '@reduxjs/toolkit';
import userLogin from './slices/user';

const store = configureStore({
  reducer: {
    userLogin,
  },
});

export default store;
