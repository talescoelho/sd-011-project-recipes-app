import { MEAL_DETAIL, MEAL_DETAIL_SUCCESS, MEAL_DETAIL_ERROR,
  DRINK_DETAIL, DRINK_DETAIL_SUCCESS, DRINK_DETAIL_ERROR } from '../actions';

const INITIAL_STATE = {
  meal: {
    detail: [],
    loading: false,
    error: null,
  },
  drink: {
    detail: [],
    loading: false,
    error: null,
  },
};

const recipeDetailReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case MEAL_DETAIL:
    return {
      ...state,
      meal: { ...state.meal, loading: true, error: null },
    };
  case MEAL_DETAIL_SUCCESS:
    return {
      ...state,
      meal: { ...state.meal, loading: false, detail: payload },
    };
  case MEAL_DETAIL_ERROR:
    return {
      ...state,
      meal: { ...state.meal, loading: false, error: payload },
    };
  case DRINK_DETAIL:
    return {
      ...state,
      drink: { ...state.drink, loading: true, error: null },
    };
  case DRINK_DETAIL_SUCCESS:
    return {
      ...state,
      drink: { ...state.drink, loading: false, detail: payload },
    };
  case DRINK_DETAIL_ERROR:
    return {
      ...state,
      drink: { ...state.drink, loading: false, error: payload },
    };
  default:
    return state;
  }
};

export default recipeDetailReducer;
