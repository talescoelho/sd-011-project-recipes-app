import { GET_MEALS, GET_MEALS_SUCCESS, GET_MEALS_ERROR,
  GET_DRINKS, GET_DRINKS_SUCCESS, GET_DRINKS_ERROR } from '../actions';

const INITIAL_STATE = {
  meals: {
    meals: [],
    loading: false,
    error: null,
  },
  drinks: {
    drinks: [],
    loading: false,
    error: null,
  },
};

const mealsAndDrinksReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case GET_MEALS:
    return {
      ...state,
      meals: { ...state.meals, loading: true, error: null },
    };
  case GET_MEALS_SUCCESS:
    return {
      ...state,
      meals: { ...state.meals, loading: false, meals: payload },
    };
  case GET_MEALS_ERROR:
    return {
      ...state,
      meals: { ...state.meals, loading: false, error: payload },
    };
  case GET_DRINKS:
    return {
      ...state,
      drinks: { ...state.drinks, loading: true, error: null },
    };
  case GET_DRINKS_SUCCESS:
    return {
      ...state,
      drinks: { ...state.drinks, loading: false, drinks: payload },
    };
  case GET_DRINKS_ERROR:
    return {
      ...state,
      drinks: { ...state.drinks, loading: false, error: payload },
    };
  default:
    return state;
  }
};

export default mealsAndDrinksReducer;
