import { combineReducers } from 'redux';
import handleIngredients from './ingredientsApiReducers';
import menuReducer from './menuReducer';
import emailReducer from './emailReducer';

const rootReducer = combineReducers({
  menuReducer,
  emailReducer,
  handleIngredients,
});

export default rootReducer;
