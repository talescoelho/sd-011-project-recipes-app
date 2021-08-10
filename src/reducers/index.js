import { combineReducers } from 'redux';
import recipesReducer from './recipesReducer';
import recipesCategoriesReducer from './recipesCategoriesReducer';
import headerSearchReducer from './headerSearchReducer';
import recipeDetailReducer from './recipeDetailReducer';
import recipeRandomReducer from './recipeRandomReducer';

const rootReducer = combineReducers({ recipesReducer,
  recipesCategoriesReducer,
  headerSearchReducer,
  recipeDetailReducer,
  recipeRandomReducer,
});

export default rootReducer;
