import { combineReducers } from 'redux';
import recipesReducer from './recipesReducer';
import recipesCategoriesReducer from './recipesCategoriesReducer';
import headerSearchReducer from './headerSearchReducer';
import recipeDetailReducer from './recipeDetailReducer';
import recipeRandomReducer from './recipeRandomReducer';
import recommendedsReducer from './recommendedsReducer';
import selectedRecipeReducer from './selectedRecipeReducer';
import ingredientsReducer from './ingredientsReducer';
import areasReducer from './areasReducer';

const rootReducer = combineReducers({
  recipesReducer,
  recipesCategoriesReducer,
  headerSearchReducer,
  recipeDetailReducer,
  recipeRandomReducer,
  recommendedsReducer,
  selectedRecipeReducer,
  ingredientsReducer,
  areasReducer,
});

export default rootReducer;
