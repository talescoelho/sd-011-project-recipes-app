import { RECEIVED_RECIPES } from '../Actions';

const INITIAL_STATE = {
  recipes: {},
};

function recipeReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case RECEIVED_RECIPES:
    return { ...state, recipes: action.allRecipes };
  default:
    return state;
  }
}

export default recipeReducer;
