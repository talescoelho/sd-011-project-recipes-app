import { combineReducers } from 'redux';
import user from './user';
import searchItems from './searchItems';
import detailsId from './detailsId';
import mainPageRecipe from './mainPageRecipe';

const rootReducer = combineReducers({ user, searchItems, detailsId, mainPageRecipe });

export default rootReducer;
