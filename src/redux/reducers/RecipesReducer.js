import { GET_RECIPES_API, REQUEST_API,
  GET_RECIPE_DETAILS_API, GET_RECIPES_PAGES } from '../actions';

// meals or drinks
const INITIAL_STATE = {
  recipesData: [],
  recipeDetailsData: [],
  recipesRedirectData: [],
  isLoading: false,
  showRecipe: false,
};

function RecipesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_API:
    return {
      ...state,
      isLoading: true,
    };
  case GET_RECIPES_API:
    return {
      ...state,
      recipesData: action.data,
      isLoading: false,
      showRecipe: true,

    };
  case GET_RECIPE_DETAILS_API:
    return {
      ...state,
      recipeDetailsData: action.data,
      isLoading: false,
    };
  case GET_RECIPES_PAGES:
    return {
      ...state,
      recipesRedirectData: [...action.data.meals],
      showRecipe: true,
    };
  default:
    return state;
  }
}

export default RecipesReducer;
