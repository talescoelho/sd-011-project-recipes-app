import {
  GET_RECIPE_DETAIL, GET_RECIPE_DETAIL_SUCCESS, GET_RECIPE_DETAIL_ERROR,
} from '../actions/selectedRecipe';

const INITIAL_STATE = {
  recipe: {},
  loading: false,
  error: null,
};

const selectedRecipeReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case GET_RECIPE_DETAIL:
    return {
      ...state,
      loading: true,
      error: null,
    };
  case GET_RECIPE_DETAIL_SUCCESS:
    return {
      ...state,
      loading: false,
      recipe: payload,
    };
  case GET_RECIPE_DETAIL_ERROR:
    return {
      ...state,
      loading: false,
      error: payload,
    };
  default:
    return state;
  }
};

export default selectedRecipeReducer;
