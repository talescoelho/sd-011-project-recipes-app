import { combineReducers } from 'redux';
import login from './login';
import recipe from './recipe';

const rootReducer = combineReducers({
  login,
  recipe,
});

export default rootReducer;
