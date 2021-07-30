import {
  REQUEST_MEALS,
  RECEIVE_MEALS_SUCCESS,
  RECEIVE_MEALS_FAILURE,
} from '../actions/mealsReducerActions';

const INITIAL_STATE = {
  meals: [],
  error: null,
  isLoading: false,
};

const mealsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_MEALS:
    return {
      ...state,
      isLoading: true,
    };
  case RECEIVE_MEALS_SUCCESS:
    return {
      ...state,
      meals: action.meals,
      isLoading: false,
    };
  case RECEIVE_MEALS_FAILURE:
    return {
      ...state,
      error: action.error,
      isLoading: false,
    };
  default:
    return state;
  }
};

export default mealsReducer;
