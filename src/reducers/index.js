import { combineReducers } from 'redux';
import mealsAndDrinksReducer from './mealsAndDrinksReducer';
import recipesCategoriesReducer from './recipesCategoriesReducer';
import headerSearchReducer from './headerSearchReducer';
import recipeDetailReducer from './recipeDetailReducer';

const rootReducer = combineReducers({ mealsAndDrinksReducer,
  recipesCategoriesReducer,
  headerSearchReducer,
  recipeDetailReducer });

export default rootReducer;
