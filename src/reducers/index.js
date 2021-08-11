import { combineReducers } from 'redux';
import recipesReducer from './recipesReducer';
import recipesCategoriesReducer from './recipesCategoriesReducer';
import headerSearchReducer from './headerSearchReducer';
import recipeDetailReducer from './recipeDetailReducer';
import recipeRandomReducer from './recipeRandomReducer';
import recommendedsReducer from './recommendedsReducer';
import selectedRecipeReducer from './selectedRecipeReducer';

const rootReducer = combineReducers({
  recipesReducer,
  recipesCategoriesReducer,
  headerSearchReducer,
  recipeDetailReducer,
  recipeRandomReducer,
  recommendedsReducer,
  selectedRecipeReducer,
});

export default rootReducer;
