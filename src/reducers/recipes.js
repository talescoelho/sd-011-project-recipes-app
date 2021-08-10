import * as actions from '../actions';

const INITIAL_STATE = {
  allRecipes: [],
  allCategories: [],
  isFiltered: false,
  recipesByIngredient: [],
  isRecipeFilter: false,
  drinkRecipeByIngredient: [],
  isDrinkFilter: false,
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case actions.REQUEST_SUCCESS:
    return (
      {
        ...state,
        allRecipes: action.payload.allRecipes,
        isFiltered: action.payload.isFiltered,
      }
    );
  case actions.CATEGORIES_SUCCESS:
    return { ...state, allCategories: action.payload };
  case actions.FILTER_FOOD_RECIPE_BY_INGREDIENT:
    return (
      {
        ...state,
        recipesByIngredient: action.payload.recipesByIngredient,
        isRecipeFilter: action.payload.isRecipeFilter,
      }
    );
  case actions.FILTER_DRINK_RECIPE_BY_INGREDIENT:
    return (
      {
        ...state,
        drinkRecipeByIngredient: action.payload.drinkRecipeByIngredient,
        isDrinkFilter: action.payload.isDrinkFilter,
      }
    );
  default:
    return state;
  }
}
