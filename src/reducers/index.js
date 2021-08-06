import { combineReducers } from 'redux';
import mealsAndDrinksReducer from './mealsAndDrinksReducer';
import recipesCategoriesReducer from './recipesCategoriesReducer';
import headerSearchReducer from './headerSearchReducer';

const rootReducer = combineReducers({ mealsAndDrinksReducer, recipesCategoriesReducer, headerSearchReducer });

export default rootReducer;
