import { combineReducers } from 'redux';
import emailReducer from './emailReducer';
import menuReducer from './menuReducer';
import recipeDetailsReducer from './recipeDetailsReducer';

const rootReducer = combineReducers({
  menuReducer,
  emailReducer,
  recipeDetailsReducer,
});

export default rootReducer;
