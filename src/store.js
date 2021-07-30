import { configureStore } from '@reduxjs/toolkit';
import { themeReducer, userReducer, recipesReducer, cocktailReducer } from './hooks';

const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
    recipes: recipesReducer,
    cocktails: cocktailReducer,
  },
});

export default store;
