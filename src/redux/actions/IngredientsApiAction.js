export const FETCH_INGREDIENTS = 'FETCH_INGREDIENTS';
export const FETCH_INGREDIENTS_SUCCESS = 'FETCH_INGREDIENTS_SUCCESS';

export const getIngredients = () => ({
  type: FETCH_INGREDIENTS,
});

export const getIngredientsSuccess = (payload) => ({
  type: FETCH_INGREDIENTS_SUCCESS,
  payload,
});

export const fetchIngredients = (ingredients) => (dispatch) => {
  dispatch(getIngredients());
  return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredients}`)
    .then((response) => response.json())
    .then((success) => dispatch(getIngredientsSuccess(success)));
};
