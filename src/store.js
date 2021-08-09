import { configureStore } from '@reduxjs/toolkit';
import {
  themeReducer,
  userReducer,
  recipesReducer,
  cocktailReducer,
  categoryReducer,
} from './hooks';

const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
    recipes: recipesReducer,
    cocktails: cocktailReducer,
    categorys: categoryReducer,
  },
});

export default store;
