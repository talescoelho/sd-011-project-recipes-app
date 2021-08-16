import { combineReducers } from 'redux';
import User from './User';
import Mechanics from './Mechanics';

const rootReducers = combineReducers({
  User,
  Mechanics,
});

export default rootReducers;
