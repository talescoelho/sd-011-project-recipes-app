import { REQUEST_CATEGORIES,
  REQUEST_SUCCESS_CATEGORIES,
  RETURN_INITIAL_STATE } from '../actions/mainPageRecipe';

const INITIAL_STATE = {
  loading: true,
  dataApi: {},
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
