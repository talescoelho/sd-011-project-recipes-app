import { combineReducers } from 'redux';
import recipesReducer from './recipesReducer';
import recipesCategoriesReducer from './recipesCategoriesReducer';
import headerSearchReducer from './headerSearchReducer';
import recipeDetailReducer from './recipeDetailReducer';

const rootReducer = combineReducers({ recipesReducer,
  recipesCategoriesReducer,
  headerSearchReducer,
  recipeDetailReducer });

export default rootReducer;
