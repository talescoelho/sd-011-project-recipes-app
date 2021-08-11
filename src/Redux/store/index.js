import { configureStore } from '@reduxjs/toolkit';
import user from '../reducers/user';
import recipes from '../reducers/recipes';

const store = configureStore({
  reducer: { recipes, user },
});

export default store;
