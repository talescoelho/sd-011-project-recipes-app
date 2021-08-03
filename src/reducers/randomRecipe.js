import { REQUEST_RANDOM_RECIPE,
  REQUEST_SUCESS_RANDOM_RECIPES } from '../actions/randomRecipeAction';

const INITIAL_STATE = {
  loading: true,
  dataApi: {},
};

function randomRecipe(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_RANDOM_RECIPE:
    return {
      ...state,
      loading: true,
    };
  case REQUEST_SUCESS_RANDOM_RECIPES:
    return {
      ...state,
      loading: false,
      dataApi: action.payload,
    };
  default:
    return state;
  }
}

export default randomRecipe;
