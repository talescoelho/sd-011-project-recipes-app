import { combineReducers } from 'redux';
import user from './user';
import searchItems from './searchItems';

const rootReducer = combineReducers({ user, searchItems });

export default rootReducer;
