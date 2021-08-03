import { combineReducers } from 'redux';
import userReducer from './userReducer';
import searchBarReducer from './searchBarReducer';
import inProgressReducer from './inProgressReducer';
import doneRecipesReducer from './doneRecipesReducer';

const rootReducer = combineReducers({
  userReducer,
  searchBarReducer,
  inProgressReducer,
  doneRecipesReducer,
});

export default rootReducer;
