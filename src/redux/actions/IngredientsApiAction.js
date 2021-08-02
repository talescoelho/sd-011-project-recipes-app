export const FETCH_INGREDIENTS = 'FETCH_INGREDIENTS';
export const FETCH_INGREDIENTS_SUCCESS = 'FETCH_INGREDIENTS_SUCCESS';

export const getIngredients = () => ({
  type: FETCH_INGREDIENTS,
});

export const getIngredientsSuccess = (payload) => ({
  type: FETCH_INGREDIENTS_SUCCESS,
  payload,
});

export const fetchIngredients = (ingredient) => (dispatch) => {
  dispatch(getIngredients());
  return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
    .then((response) => console.log(response.json()))
    .then((success) => dispatch(getIngredientsSuccess(success)));
};
