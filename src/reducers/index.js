import { combineReducers } from 'redux';
import user from './user';
import searchItems from './searchItems';
import detailsId from './detailsId';

const rootReducer = combineReducers({ user, searchItems, detailsId });

export default rootReducer;
