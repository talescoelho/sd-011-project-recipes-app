import { combineReducers } from 'redux';
import emailReducer from './emailReducer';
import menuReducer from './menuReducer';
import recipeDetailsReducer from './recipeDetailsReducer';
import recipeProgressReducer from './recipeProgressReducer';

const rootReducer = combineReducers({
  menuReducer,
  emailReducer,
  recipeDetailsReducer,
  recipeProgressReducer,
});

export default rootReducer;
