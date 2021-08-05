import { combineReducers } from 'redux';
import mealsReducer from './mealsReducer';
import drinksReducer from './drinksReducer';
import recipesCategoriesReducer from './recipesCategoriesReducer';

const rootReducer = combineReducers({
  mealsReducer, drinksReducer, recipesCategoriesReducer,
});

export default rootReducer;
