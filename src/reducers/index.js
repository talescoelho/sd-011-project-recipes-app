import { combineReducers } from 'redux';
import user from './user';
import searchItems from './searchItems';
import detailsId from './detailsId';
import mainPageRecipe from './mainPageRecipe';
import randomRecipe from './randomRecipe';
import areaReducer from './areaReducer';
import ingredients from './ingredients';

const rootReducer = combineReducers({
  user,
  searchItems,
  detailsId,
  mainPageRecipe,
  randomRecipe,
  areaReducer,
  ingredients,
});

export default rootReducer;
