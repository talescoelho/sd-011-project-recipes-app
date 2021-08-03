import { combineReducers } from 'redux';
import user from './user';
import searchItems from './searchItems';
import detailsId from './detailsId';
import mainPageRecipe from './mainPageRecipe';
import ingredients from './ingredients';

const rootReducer = combineReducers({
  user,
  searchItems,
  detailsId,
  mainPageRecipe,
  ingredients });

export default rootReducer;
