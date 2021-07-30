export const REQUEST_BY_INGREDIENT_SUCCESS = 'REQUEST_BY_INGREDIENT_SUCCESS';
export const REQUEST_BY_NAME_SUCCESS = 'REQUEST_BY_NAME_SUCCESS';
export const REQUEST_BY_LETTER_SUCCESS = 'REQUEST_BY_LETTER_SUCCESS';

function handleByIngredientSuccess(result) {
  console.log('AQUI', result);
  return { type: REQUEST_BY_INGREDIENT_SUCCESS, payload: result };
}

export function recipesByIngredient(ingredient) {
  return (dispatch) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
      .then((response) => response.json())
      .then(
        (json) => dispatch(handleByIngredientSuccess(json.meals)),
        (error) => console.log(error),
      );
  };
}

function handleByNameSuccess(result) {
  console.log('AQUI POR NOME', result);
  return { type: REQUEST_BY_NAME_SUCCESS, payload: result };
}

export function recipesByName(name) {
  return (dispatch) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
      .then((response) => response.json())
      .then(
        (json) => dispatch(handleByNameSuccess(json.meals)),
        (error) => console.log(error),
      );
  };
}

function handleByLetterSuccess(result) {
  console.log('AQUI PELA LETRA', result);
  return { type: REQUEST_BY_LETTER_SUCCESS, payload: result };
}

export function recipesByLetter(letter) {
  return (dispatch) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
      .then((response) => response.json())
      .then(
        (json) => dispatch(handleByLetterSuccess(json.meals)),
        (error) => console.log(error),
      );
  };
}
