import { combineReducers } from 'redux';
import login from './login';
import recipes from './recipes';
import recipe from './recipe';

const rootReducer = combineReducers({
  login,
  recipes,
  recipe,
});

export default rootReducer;
