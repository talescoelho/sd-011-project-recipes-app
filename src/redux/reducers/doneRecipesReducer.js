import { ADD_DONE_RECIPE } from '../actions';

const INITIAL_STATE = {
  doneRecipes: [],
};

function doneRecipesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ADD_DONE_RECIPE:
    return {
      ...state,
      doneRecipes: [...state.doneRecipes, [action.recipe]],
    };

  default:
    return state;
  }
}

export default doneRecipesReducer;
