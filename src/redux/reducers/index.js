import { combineReducers } from 'redux';
import foodReducer from './foodReducer';
import drinkReducer from './drinkReducer';

const reducer = combineReducers({ foodReducer, drinkReducer });

export default reducer;
