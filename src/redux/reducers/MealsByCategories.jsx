import { FETCH_MEALS_BY_CATEGORIES_ERROR, FETCH_MEALS_BY_CATEGORIES_STARTED,
  FETCH_MEALS_BY_CATEGORIES_SUCESS, SELECTED_MEAL_CATEGORY,
  TOOGLE_MEALS_CATEGORIES } from '../actions';

const INITIAL_STATE = {
  mealsByCategories: [],
  isLoading: false,
  error: '',
  toogle: false,
  selectedCategory: '',
};

const MealsByCategories = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FETCH_MEALS_BY_CATEGORIES_STARTED:
    return { ...state, isLoading: true };
  case FETCH_MEALS_BY_CATEGORIES_SUCESS:
    return { ...state, mealsByCategories: action.payload, isLoading: false };
  case FETCH_MEALS_BY_CATEGORIES_ERROR:
    return { ...state, error: action.payload, isLoading: false };
  case TOOGLE_MEALS_CATEGORIES:
    return { ...state, toogle: action.payload };
  case SELECTED_MEAL_CATEGORY:
    return { ...state, selectedCategory: action.payload };
  default:
    return state;
  }
};

export default MealsByCategories;
