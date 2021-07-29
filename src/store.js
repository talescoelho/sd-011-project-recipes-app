import { configureStore } from '@reduxjs/toolkit';
import { themeReducer, userReducer } from './hooks';

const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
  },
});

export default store;
