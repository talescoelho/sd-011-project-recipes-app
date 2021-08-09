import { configureStore } from '@reduxjs/toolkit';
import {
  themeReducer,
  userReducer,
  recipesReducer,
  cocktailReducer,
  categoryReducer,
  ingredientReducer,
} from './hooks';

const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
    recipes: recipesReducer,
    cocktails: cocktailReducer,
    categorys: categoryReducer,
    ingredients: ingredientReducer,
  },
});

export default store;
