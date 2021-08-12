import { configureStore } from '@reduxjs/toolkit';
import {
  themeReducer,
  userReducer,
  recipesReducer,
  cocktailReducer,
  categoryReducer,
  ingredientReducer,
  areasReducer,
} from './hooks';

const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
    areas: areasReducer,
    recipes: recipesReducer,
    categorys: categoryReducer,
    cocktails: cocktailReducer,
    ingredients: ingredientReducer,
  },
});

export default store;
