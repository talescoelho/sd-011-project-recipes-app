import { combineReducers } from 'redux';
import user from './user';
import comidas from './comidas';

const rootReducer = combineReducers({
  user,
  comidas,
});

export default rootReducer;
