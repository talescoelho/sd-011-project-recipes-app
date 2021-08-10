import { combineReducers } from 'redux';
import Filter from './Filter';
import Meals from './Meals';
import Drinks from './Drinks';
import MealsCategories from './MealsCategories';
import MealsByArea from './MealsByArea';
import DrinksCategories from './DrinksCategories';
import MealsByCategories from './MealsByCategories';
import DrinksByCategories from './DrinksByCategories';

const rootReducer = combineReducers({
  Filter,
  Meals,
  Drinks,
  MealsCategories,
  DrinksCategories,
  MealsByCategories,
  DrinksByCategories,
  MealsByArea,
});

export default rootReducer;
