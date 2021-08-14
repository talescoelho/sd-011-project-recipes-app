import {
  REQUEST_SUCCESS,
  CATEGORIES_SUCCESS,
  FILTER_FOOD_RECIPE_BY_INGREDIENT,
  FILTER_DRINK_RECIPE_BY_INGREDIENT,
  FAVORITE_RECIPE,
} from '../actions';

let initialFavorites = window.localStorage.getItem('favoriteRecipes');
if (initialFavorites) {
  initialFavorites = JSON.parse(initialFavorites);
} else {
  initialFavorites = [];
}

const INITIAL_STATE = {
  allRecipes: [],
  allCategories: [],
  isFiltered: false,
  recipesByIngredient: [],
  isRecipeFilter: false,
  drinkRecipeByIngredient: [],
  isDrinkFilter: false,
  favorites: initialFavorites,
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
  case FAVORITE_RECIPE:
    return (
      { ...state, favorites: payload }
    );
  default:
    return state;
  }
}
