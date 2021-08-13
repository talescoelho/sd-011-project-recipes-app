export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const CATEGORIES_SUCCESS = 'CATEGORIES_SUCCESS';
export const FILTER_FOOD_RECIPE_BY_INGREDIENT = 'FILTER_FOOD_RECIPE_BY_INGREDIENT';
export const FILTER_DRINK_RECIPE_BY_INGREDIENT = 'FILTER_DRINK_RECIPE_BY_INGREDIENT';
export const USER_EMAIL = 'USER_EMAIL';
export const FAVORITE_RECIPE = 'FAVORITE_RECIPE';
const MESSAGE_ALERT = 'Sinto muito, não encontramos nenhuma receita para esses filtros.';

function handleRequestSuccess(result, isFiltered) {
  if (result === null) {
    result = [];
  }
  return { type: REQUEST_SUCCESS, payload: { allRecipes: result, isFiltered } };
}

export function handleFavoriteRecipe(newFav) {
  return { type: FAVORITE_RECIPE, payload: newFav };
}

function handleCategoriesSuccess(result) {
  return { type: CATEGORIES_SUCCESS, payload: result };
}

function handleFilterRecipeByIngredient(result, isRecipeFilter) {
  if (result === null) {
    result = [];
  }
  return (
    {
      type: FILTER_FOOD_RECIPE_BY_INGREDIENT,
      payload: { recipesByIngredient: result, isRecipeFilter },
    }
  );
}

function handleFilterDrinkRecipeByIngredient(result, isDrinkFilter) {
  if (result === null) {
    result = [];
  }
  return (
    {
      type: FILTER_DRINK_RECIPE_BY_INGREDIENT,
      payload: { drinkRecipeByIngredient: result, isDrinkFilter },
    }
  );
}

function defaultFunctionFood(dispatch, json) {
  dispatch(handleRequestSuccess(json.meals, false));
  if (!json.meals) {
    return (
      alert(MESSAGE_ALERT)
    );
  }
}

function defaultFunctionDrink(dispatch, json) {
  dispatch(handleRequestSuccess(json.drinks, false));
  if (!json.drinks) {
    return (
      alert(MESSAGE_ALERT)
    );
  }
}

export function foodRecipesByIngredient(ingredient) {
  return (dispatch) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
      .then((response) => response.json())
      .then(
        (json) => defaultFunctionFood(dispatch, json),
      );
  };
}

export function foodRecipesByName(name) {
  return (dispatch) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
      .then((response) => response.json())
      .then(
        (json) => defaultFunctionFood(dispatch, json),
      );
  };
}

export function foodRecipesByLetter(letter) {
  return (dispatch) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
      .then((response) => response.json())
      .then(
        (json) => defaultFunctionFood(dispatch, json),
      );
  };
}

export function drinkRecipesByIngredient(ingredient) {
  return (dispatch) => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`)
      .then((response) => response.json())
      .then(
        (json) => defaultFunctionDrink(dispatch, json),
      );
  };
}

export function drinkRecipesByName(name) {
  return (dispatch) => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
      .then((response) => response.json())
      .then(
        (json) => defaultFunctionDrink(dispatch, json),
      );
  };
}

export function drinkRecipesByLetter(letter) {
  return (dispatch) => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`)
      .then((response) => response.json())
      .then(
        (json) => defaultFunctionDrink(dispatch, json),
      );
  };
}

export function generalRecipesFood() {
  return (dispatch) => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
      .then((response) => response.json())
      .then(
        (json) => dispatch(handleRequestSuccess(json.meals)),
      );
  };
}

export function generalRecipesDrink() {
  return (dispatch) => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
      .then((response) => response.json())
      .then(
        (json) => dispatch(handleRequestSuccess(json.drinks)),
      );
  };
}

export function categoriesFood() {
  return (dispatch) => {
    fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
      .then((response) => response.json())
      .then(
        (json) => dispatch(handleCategoriesSuccess(json.meals)),
      );
  };
}

export function categoriesDrink() {
  return (dispatch) => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
      .then((response) => response.json())
      .then(
        (json) => dispatch(handleCategoriesSuccess(json.drinks)),
      );
  };
}

export function filteredFoods(filter) {
  return (dispatch) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${filter}`)
      .then((response) => response.json())
      .then(
        (json) => dispatch(handleRequestSuccess(json.meals, true)),
      );
  };
}

export function filteredDrinks(filter) {
  return (dispatch) => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filter}`)
      .then((response) => response.json())
      .then(
        (json) => dispatch(handleRequestSuccess(json.drinks, true)),
      );
  };
}

export function filterRecipeByIngredient(ingredient) {
  return (dispatch) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
      .then((response) => response.json())
      .then(
        (json) => dispatch(handleFilterRecipeByIngredient(json.meals, true)),
      );
  };
}

export function filterDrinkByIngredient(ingredient) {
  return (dispatch) => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`)
      .then((response) => response.json())
      .then(
        (json) => dispatch(handleFilterDrinkRecipeByIngredient(json.drinks, true)),
      );
  };
}

export const setEmail = (payload) => ({
  type: USER_EMAIL,
  payload,
});
