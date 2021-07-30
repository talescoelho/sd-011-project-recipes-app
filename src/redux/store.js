import { configureStore } from '@reduxjs/toolkit';
import userLogin from './slices/user';
import fetchRecipes from './slices/fetchComidas';

const store = configureStore({
  reducer: {
    userLogin,
    fetchRecipes,
  },
});

export default store;
