import { combineReducers } from 'redux';
import drinkReducer from './drinkReducer';
import foodReducer from './foodReducer';

const reducer = combineReducers({ foodReducer, drinkReducer });

export default reducer;
