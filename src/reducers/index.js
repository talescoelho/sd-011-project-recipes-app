import { combineReducers } from 'redux';
// import mealsReducer from './mealsReducer';
// import drinksReducer from './drinksReducer';
import mealsAndDrinksReducer from './mealsAndDrinksReducer';

const rootReducer = combineReducers({ mealsAndDrinksReducer });

export default rootReducer;
