export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';

function handleFoodsSuccess(result) {
  console.log('AQUI FOODS', result);
  if (result === null) {
    result = [];
  }
  return { type: REQUEST_SUCCESS, payload: result };
}

export function foodRecipesByIngredient(ingredient) {
  return (dispatch) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
      .then((response) => response.json())
      .then(
        (json) => dispatch(handleFoodsSuccess(json.meals)),
        () => dispatch(handleFoodsSuccess([])),
      );
  };
}

export function foodRecipesByName(name) {
  return (dispatch) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
      .then((response) => response.json())
      .then(
        (json) => dispatch(handleFoodsSuccess(json.meals)),
        () => dispatch(handleFoodsSuccess([])),
      );
  };
}

export function foodRecipesByLetter(letter) {
  return (dispatch) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
      .then((response) => response.json())
      .then(
        (json) => dispatch(handleFoodsSuccess(json.meals)),
        () => dispatch(handleFoodsSuccess([])),
      );
  };
}

function handleDrinksSuccess(result) {
  console.log('AQUI DRINKS', result);
  if (result === null) {
    result = [];
  }
  return { type: REQUEST_SUCCESS, payload: result };
}

export function drinkRecipesByIngredient(ingredient) {
  return (dispatch) => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`)
      .then((response) => response.json())
      .then(
        (json) => dispatch(handleDrinksSuccess(json.drinks)),
        () => dispatch(handleDrinksSuccess([])),
      );
  };
}

export function drinkRecipesByName(name) {
  return (dispatch) => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
      .then((response) => response.json())
      .then(
        (json) => dispatch(handleDrinksSuccess(json.drinks)),
        () => dispatch(handleDrinksSuccess([])),
      );
  };
}

export function drinkRecipesByLetter(letter) {
  return (dispatch) => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`)
      .then((response) => response.json())
      .then(
        (json) => dispatch(handleDrinksSuccess(json.drinks)),
        () => dispatch(handleDrinksSuccess([])),
      );
  };
}
