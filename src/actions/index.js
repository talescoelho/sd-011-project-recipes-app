export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const USER_EMAIL = 'USER_EMAIL';
const MESSAGE_ALERT = 'Sinto muito, não encontramos nenhuma receita para esses filtros.';

function handleRequestSuccess(result) {
  if (result === null) {
    result = [];
  }
  return { type: REQUEST_SUCCESS, payload: result };
}

function defaultFunctionFood(dispatch, json) {
  dispatch(handleRequestSuccess(json.meals));
  if (!json.meals) {
    return (
      alert(MESSAGE_ALERT)
    );
  }
}

function defaultFunctionDrink(dispatch, json) {
  dispatch(handleRequestSuccess(json.drinks));
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
        (json) => dispatch(handleRequestSuccess(json.meals))
      );
  };
}

export function generalRecipesDrink() {
  return (dispatch) => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
      .then((response) => response.json())
      .then(
        (json) => dispatch(handleRequestSuccess(json.drinks))
      );
  }
}

export const setEmail = (payload) => ({
  type: USER_EMAIL,
  payload,
});
