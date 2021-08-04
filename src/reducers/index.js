import { combineReducers } from 'redux';
import mealsReducer from './mealsReducer';
import drinksReducer from './drinksReducer';

const rootReducer = combineReducers({ mealsReducer, drinksReducer });

export default rootReducer;
