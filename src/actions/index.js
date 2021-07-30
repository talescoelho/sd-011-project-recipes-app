export const REQUEST_BY_INGREDIENT_SUCCESS = 'REQUEST_BY_INGREDIENT_SUCCESS';

function handleByIngredientSuccess(result) {
  console.log('AQUI', result)
  return { type: REQUEST_BY_INGREDIENT_SUCCESS, payload: result }
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