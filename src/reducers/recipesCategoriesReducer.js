import {
  GET_RECIPES_CATEGORIES, GET_RECIPES_CATEGORIES_SUCCESS, GET_RECIPES_CATEGORIES_ERROR,
} from '../actions';

const INITIAL_STATE = {
  categories: [],
  type: 'not defined',
  loading: true,
  error: null,
};

const recipesCategoriesReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case GET_RECIPES_CATEGORIES:
    return {
      ...state,
      loading: true,
      error: null,
    };
  case GET_RECIPES_CATEGORIES_SUCCESS:
    return {
      ...state,
      loading: false,
      categories: payload.categories,
      type: payload.type,
    };
  case GET_RECIPES_CATEGORIES_ERROR:
    return {
      ...state,
      loading: false,
      error: `${payload}`,
    };
  default:
    return state;
  }
};

export default recipesCategoriesReducer;
