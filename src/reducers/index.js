import { combineReducers } from 'redux';
import mealsAndDrinksReducer from './mealsAndDrinksReducer';
import recipesCategoriesReducer from './recipesCategoriesReducer';

const rootReducer = combineReducers({ mealsAndDrinksReducer, recipesCategoriesReducer });

export default rootReducer;
