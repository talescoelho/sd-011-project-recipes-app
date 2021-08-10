import {
  REQUEST_OPTIONS,
  RECEIVE_OPTIONS_SUCCESS,
  RECEIVE_OPTIONS_FAILURE,
} from '../actions/exploreRecipeActions';

const INITIAL_STATE = {
  options: [],
  isLoading: false,
  error: null,
};

const exploreRecipeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_OPTIONS:
    return {
      ...state,
      isLoading: true,
    };
  case RECEIVE_OPTIONS_SUCCESS:
    return {
      ...state,
      options: action.data,
      isLoading: false,
    };
  case RECEIVE_OPTIONS_FAILURE:
    return {
      ...state,
      error: '404',
    };
  default:
    return state;
  }
};

export default exploreRecipeReducer;
