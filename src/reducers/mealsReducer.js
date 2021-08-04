import { GET_MEALS, GET_MEALS_SUCCESS, GET_MEALS_ERROR } from '../actions';

const INITIAL_STATE = {
  meals: [],
  loading: false,
  error: null,
};

const mealsReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case GET_MEALS:
    return {
      ...state,
      loading: true,
      error: null,
    };
  case GET_MEALS_SUCCESS:
    return {
      ...state,
      loading: false,
      meals: payload,
    };
  case GET_MEALS_ERROR:
    return {
      ...state,
      loading: false,
      error: `${payload}`,
    };
  default:
    return state;
  }
};

export default mealsReducer;
