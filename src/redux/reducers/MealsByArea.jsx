import { MEALS_BY_AREA } from '../actions/index';

const INITIAL_STATE = {
  meals: [],
  isLoading: false,
  error: '',
};

const mealsByArea = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case MEALS_BY_AREA:
    return {
      ...state,
      meals: action.payload.meals,
    };
  default:
    return state;
  }
};

export default mealsByArea;
