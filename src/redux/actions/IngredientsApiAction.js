import {
  menuRequest,
  handleMealsResponse,
  menuReceiveSuccess,
  menuReceiveFailure,
} from './menuReducerActions';

export const fetchIngredients = (ingredients) => (dispatch) => {
  dispatch(menuRequest());
  return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredients}`)
    .then((response) => response.json())
    .then(async ({ meals }) => {
      const response = await handleMealsResponse(meals);
      dispatch(menuReceiveSuccess(response));
    })
    .catch((error) => dispatch(menuReceiveFailure(error)));
};

export const fetchByName = (byName) => (dispatch) => {
  dispatch(menuRequest());
  return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${byName}`)
    .then((response) => response.json())
    .then(async ({ meals }) => {
      const response = await handleMealsResponse(meals);
      dispatch(menuReceiveSuccess(response));
    })
    .catch((error) => dispatch(menuReceiveFailure(error)));
};

export const fetchByFirstLetter = (firstLetter) => (dispatch) => {
  dispatch(menuRequest());
  return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`)
    .then((response) => response.json())
    .then(async ({ meals }) => {
      const response = await handleMealsResponse(meals);
      dispatch(menuReceiveSuccess(response));
    })
    .catch((error) => dispatch(menuReceiveFailure(error)));
};
