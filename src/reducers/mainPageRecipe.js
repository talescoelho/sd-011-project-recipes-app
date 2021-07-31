import { REQUEST_CATEGORIES,
  REQUEST_SUCCESS_CATEGORIES,
  REQUEST_FILTER_CATEGORIES,
  REQUEST_SUCCESS_FILTER_CATEGORIES,
  RETURN_INITIAL_STATE } from '../actions/mainPageRecipe';

const INITIAL_STATE = {
  loading: true,
  loadingFilter: true,
  dataApi: {},
  filterApi: {},
};

function mainPageRecipeReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_CATEGORIES:
    return {
      ...state,
      loading: true,
    };
  case REQUEST_SUCCESS_CATEGORIES:
    return {
      ...state,
      loading: false,
      dataApi: action.payload,
    };
  case REQUEST_FILTER_CATEGORIES:
    return {
      ...state,
      loadingFilter: true,
    };
  case REQUEST_SUCCESS_FILTER_CATEGORIES:
    return {
      ...state,
      loadingFilter: false,
      filterApi: action.payload,
    };
  case RETURN_INITIAL_STATE:
    return {
      ...state,
      loading: true,
      dataApi: {},
    };
  default:
    return state;
  }
}

export default mainPageRecipeReducer;
