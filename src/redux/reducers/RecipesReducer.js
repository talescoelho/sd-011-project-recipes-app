import { GET_RECIPES_API, REQUEST_API } from '../actions';

const INITIAL_STATE = {
  recipesData: [],
  isLoading: false,
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
    };
  default:
    return state;
  }
}

export default RecipesReducer;
