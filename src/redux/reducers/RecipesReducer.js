const INITIAL_STATE = {
  recipes: [],
};

function RecipesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SEARCH_RECIPES:
    return { ...state, recipes: action.data };

  default:
    return state;
  }
}

export default RecipesReducer;
