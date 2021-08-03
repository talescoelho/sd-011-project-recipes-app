export const FETCH_INGREDIENTS = 'FETCH_INGREDIENTS';
export const FETCH_INGREDIENTS_SUCCESS = 'FETCH_INGREDIENTS_SUCCESS';
export const FETCH_BY_NAME = 'FETCH_BY_NAME';
export const FETCH_BY_NAME_SUCCESS = 'FETCH_BY_NAME_SUCCESS';

export const getIngredients = () => ({
  type: FETCH_INGREDIENTS,
});

export const getIngredientsSuccess = (payload) => ({
  type: FETCH_INGREDIENTS_SUCCESS,
  payload,
});

export const getByName = () => ({
  type: FETCH_BY_NAME,
});

export const getByNameSuccess = (payload) => ({
  type: FETCH_BY_NAME_SUCCESS,
  payload,
});

export const fetchIngredients = (ingredients) => (dispatch) => {
  dispatch(getIngredients());
  return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredients}`)
    .then((response) => response.json())
    .then((success) => dispatch(getIngredientsSuccess(success)));
};

export const fetchByName = (byName) => (dispatch) => {
  dispatch(getIngredients());
  return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${byName}`)
    .then((response) => response.json())
    .then((success) => dispatch(getByNameSuccess(success)));
};
