import {
  REQUEST_API,
  REQUEST_FOOD_API_SUCCESS,
  REQUEST_DRINK_API_SUCCESS,
  REQUEST_FOOD_OR_DRINK_API_ERROR,
} from '../actions/index';

const INITIAL_STATE = {
  loading: false,
  error: '',
  food: [],
  drink: [],
};

function revenueReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_API:
    return {
      ...state,
      loading: true,
    };
  case REQUEST_FOOD_API_SUCCESS:
    return {
      ...state,
      loading: false,
      food: [...action.payload],
    };
  case REQUEST_DRINK_API_SUCCESS:
    return {
      ...state,
      loading: false,
      drink: [...action.payload],
    };
  case REQUEST_FOOD_OR_DRINK_API_ERROR:
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  default:
    return {
      ...state,
    };
  }
}

export default revenueReducer;
