import { FETCH_MEALS_CATEGORIES_ERROR, FETCH_MEALS_CATEGORIES_STARTED,
  FETCH_MEALS_CATEGORIES_SUCESS } from '../actions';

const INITIAL_STATE = {
  mealsCategories: [],
  isLoading: false,
  error: '',
};

const MealsCategories = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FETCH_MEALS_CATEGORIES_STARTED:
    return { ...state, isLoading: true };
  case FETCH_MEALS_CATEGORIES_SUCESS:
    return { ...state, mealsCategories: action.payload, isLoading: false };
  case FETCH_MEALS_CATEGORIES_ERROR:
    return { ...state, error: action.payload, isLoading: false };
  default:
    return state;
  }
};

export default MealsCategories;
