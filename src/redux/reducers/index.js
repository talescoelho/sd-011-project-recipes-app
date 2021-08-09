import { combineReducers } from 'redux';
import drinkReducer from './drinkReducer';
import foodReducer from './foodReducer';
import searchBarReducer from './searchBarReducer';

const reducer = combineReducers({ foodReducer, drinkReducer, searchBarReducer });

export default reducer;
