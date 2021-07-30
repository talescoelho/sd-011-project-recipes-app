export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';

function handleFoodsSuccess(result) {
  console.log('AQUI FOODS', result);
  return { type: REQUEST_SUCCESS, payload: result };
}

export function foodRecipesByIngredient(ingredient) {
  return (dispatch) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
      .then((response) => response.json())
      .then(
        (json) => dispatch(handleFoodsSuccess(json.meals)),
        (error) => console.log(error),
      );
  };
}

export function foodRecipesByName(name) {
  return (dispatch) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
      .then((response) => response.json())
      .then(
        (json) => dispatch(handleFoodsSuccess(json.meals)),
        (error) => console.log(error),
      );
  };
}

export function foodRecipesByLetter(letter) {
  return (dispatch) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
      .then((response) => response.json())
      .then(
        (json) => dispatch(handleFoodsSuccess(json.meals)),
        (error) => console.log(error),
      );
  };
}

function handleDrinksSuccess(result) {
  console.log('AQUI DRINKS', result);
  return { type: REQUEST_SUCCESS, payload: result };
}

export function drinkRecipesByIngredient(ingredient) {
  return (dispatch) => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`)
      .then((response) => response.json())
      .then(
        (json) => dispatch(handleDrinksSuccess(json.drinks)),
        (error) => console.log(error),
      );
  };
}

export function drinkRecipesByName(name) {
  return (dispatch) => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
      .then((response) => response.json())
      .then(
        (json) => dispatch(handleDrinksSuccess(json.drinks)),
        (error) => console.log(error),
      );
  };
}

export function drinkRecipesByLetter(letter) {
  return (dispatch) => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`)
      .then((response) => response.json())
      .then(
        (json) => dispatch(handleDrinksSuccess(json.drinks)),
        (error) => console.log(error),
      );
  };
}
