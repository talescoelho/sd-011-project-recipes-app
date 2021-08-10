import {
  REQUEST_SUCCESS,
  CATEGORIES_SUCCESS,
  FILTER_FOOD_RECIPE_BY_INGREDIENT,
  FILTER_DRINK_RECIPE_BY_INGREDIENT,
} from '../actions';

const INITIAL_STATE = {
  allRecipes: [],
  allCategories: [],
  isFiltered: false,
  recipesByIngredient: [],
  isRecipeFilter: false,
  drinkRecipeByIngredient: [],
  isDrinkFilter: false,
};

export default function reducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
  case REQUEST_SUCCESS:
    return (
      {
        ...state,
        allRecipes: payload.allRecipes,
        isFiltered: payload.isFiltered,
      }
    );
  case CATEGORIES_SUCCESS:
    return { ...state, allCategories: payload };
  case FILTER_FOOD_RECIPE_BY_INGREDIENT:
    return (
      {
        ...state,
        recipesByIngredient: payload.recipesByIngredient,
        isRecipeFilter: payload.isRecipeFilter,
      }
    );
  case FILTER_DRINK_RECIPE_BY_INGREDIENT:
    return (
      {
        ...state,
        drinkRecipeByIngredient: payload.drinkRecipeByIngredient,
        isDrinkFilter: payload.isDrinkFilter,
      }
    );
  default:
    return state;
  }
}
