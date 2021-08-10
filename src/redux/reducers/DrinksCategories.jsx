import { FETCH_DRINKS_CATEGORIES_STARTED, FETCH_DRINKS_CATEGORIES_SUCESS,
  FETCH_MEALS_CATEGORIES_ERROR } from '../actions';

const INITIAL_STATE = {
  drinksCategories: [],
  isLoading: false,
  error: '',
};

const DrinksCategories = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FETCH_DRINKS_CATEGORIES_STARTED:
    return { ...state, isLoading: true };
  case FETCH_DRINKS_CATEGORIES_SUCESS:
    return { ...state, drinksCategories: action.payload, isLoading: false };
  case FETCH_MEALS_CATEGORIES_ERROR:
    return { ...state, error: action.payload, isLoading: false };
  default:
    return state;
  }
};

export default DrinksCategories;
