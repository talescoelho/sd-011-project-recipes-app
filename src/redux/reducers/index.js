import { combineReducers } from 'redux';
import foodReducers from './foodReducer';

const reducer = combineReducers({ foodReducers });

export default reducer;
