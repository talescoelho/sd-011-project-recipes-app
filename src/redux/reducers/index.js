import { combineReducers } from 'redux';
import userReducer from './userReducer';
import searchBarReducer from './searchBarReducer';

const rootReducer = combineReducers({
  userReducer,
  searchBarReducer,
});

export default rootReducer;
