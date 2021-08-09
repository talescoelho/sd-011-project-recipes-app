const INITIAL_STATE = {
  currentRecipes: {
    meals: {
    },
    cocktails: [],
  },
  doneRecipes: [],
  favoriteRecipes: [],
};

const recipe = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'ADD_RECIPE_ONGOING':
    return {
      ...state,
      currentRecipes: {
        ...state.currentRecipes,
        meals: {
          ...state.currentRecipes.meals,
          [action.payload]: [action.payload2],
        },
      },
    };
  case 'ADD_RECIPE_FAVORITE':
    return {
      ...state,
      favoriteRecipes: [...state.favoriteRecipes, action.payload],
    };
  default:
    return state;
  }
};

export default recipe;
