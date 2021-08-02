import { FETCH_MEALS_ERROR, FETCH_MEALS_STARTED, FETCH_MEALS_SUCESS } from '../actions';

const INITIAL_STATE = {
  meals: [],
  isLoading: false,
  error: '',
};

const Meals = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FETCH_MEALS_STARTED:
    return { ...state, isLoading: true };
  case FETCH_MEALS_SUCESS:
    return { ...state, meals: action.payload, isLoading: false };
  case FETCH_MEALS_ERROR:
    return { ...state, error: action.payload, isLoading: false };
  default:
    return state;
  }
};

export default Meals;
