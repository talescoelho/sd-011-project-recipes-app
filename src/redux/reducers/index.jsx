import { combineReducers } from 'redux';
import Filter from './Filter';
import Meals from './Meals';
import Drinks from './Drinks';

const rootReducer = combineReducers({
  Filter,
  Meals,
  Drinks,
});

export default rootReducer;
