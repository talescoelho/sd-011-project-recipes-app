import { FETCH_DRINKS_BY_CATEGORIES_ERROR, FETCH_DRINKS_BY_CATEGORIES_STARTED,
  FETCH_DRINKS_BY_CATEGORIES_SUCESS, SELECTED_DRINK_CATEGORY,
  TOOGLE_DRINKS_CATEGORIES } from '../actions';

const INITIAL_STATE = {
  drinksByCategories: [],
  isLoading: false,
  error: '',
  toogle: false,
  selectedCategory: '',
};

const DrinksByCategories = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FETCH_DRINKS_BY_CATEGORIES_STARTED:
    return { ...state, isLoading: true };
  case FETCH_DRINKS_BY_CATEGORIES_SUCESS:
    return { ...state, drinksByCategories: action.payload, isLoading: false };
  case FETCH_DRINKS_BY_CATEGORIES_ERROR:
    return { ...state, error: action.payload, isLoading: false };
  case TOOGLE_DRINKS_CATEGORIES:
    return { ...state, toogle: action.payload };
  case SELECTED_DRINK_CATEGORY:
    return { ...state, selectedCategory: action.payload };
  default:
    return state;
  }
};

export default DrinksByCategories;
