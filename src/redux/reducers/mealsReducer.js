import {
  REQUEST_MEALS,
  RECEIVE_MEALS_SUCCESS,
  RECEIVE_MEALS_FAILURE,
  REQUEST_MEALS_FILTERS,
  RECEIVE_MEALS_FILTERS_SUCCESS,
  RECEIVE_MEALS_FILTERS_FAILURE,
} from '../actions/mealsReducerActions';

const INITIAL_STATE = {
  meals: [],
  error: null,
  isLoading: false,
  filters: {
    options: [],
    isLoading: false,
    error: null,
  },
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
  case REQUEST_MEALS_FILTERS:
    return {
      ...state,
      filters: {
        ...state.filters,
        isLoading: true,
      },
    };
  case RECEIVE_MEALS_FILTERS_SUCCESS:
    return {
      ...state,
      filters: {
        ...state.filters,
        options: action.options,
        isLoading: false,
      },
    };
  case RECEIVE_MEALS_FILTERS_FAILURE:
    return {
      ...state,
      filters: {
        ...state.filters,
        error: action.error,
      },
    };
  default:
    return state;
  }
};

export default mealsReducer;
