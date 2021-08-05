import { combineReducers } from 'redux';
import emailReducer from './emailReducer';
import menuReducer from './menuReducer';
import recipeDetailsReducer from './recipeDetailsReducer';

const rootReducer = combineReducers({ emailReducer, menuReducer, recipeDetailsReducer });

export default rootReducer;
