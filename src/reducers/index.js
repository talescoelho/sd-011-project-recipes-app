import { combineReducers } from 'redux';
// import mealsReducer from './mealsReducer';
// import drinksReducer from './drinksReducer';
import mealsAndDrinksReducer from './mealsAndDrinksReducer';
import recipesCategoriesReducer from './recipesCategoriesReducer';

const rootReducer = combineReducers({ mealsAndDrinksReducer, recipesCategoriesReducer });

export default rootReducer;
