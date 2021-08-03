export const GET_MEALS = 'GET_MEALS';
export const GET_MEALS_SUCCESS = 'GET_MEALS_SUCCESS';
export const GET_MEALS_ERROR = 'GET_MEALS_ERROR';
export const GET_DRINKS = 'GET_DRINKS';
export const GET_DRINKS_SUCCESS = 'GET_DRINKS_SUCCESS';
export const GET_DRINKS_ERROR = 'GET_DRINKS_ERROR';

const baseMealDbUrl = 'https://www.themealdb.com/api/json/v1/1';
const baseCocktailDbUrl = 'https://www.thecocktaildb.com/api/json/v1/1';

const getMeals = () => ({
  type: GET_MEALS,
});

const getMealsSuccess = (meals) => ({
  type: GET_MEALS_SUCCESS,
  payload: meals,
});

const getMealsError = (error) => ({
  type: GET_MEALS_ERROR,
  payload: error,
});

export const fetchMeals = () => (dispatch) => {
  dispatch(getMeals());

  const url = `${baseMealDbUrl}/search.php?s=`;

  return fetch(url)
    .then((response) => response.json())
    .then(({ meals }) => dispatch(getMealsSuccess(meals)))
    .catch((error) => dispatch(getMealsError(error)));
};

const getDrinks = () => ({
  type: GET_DRINKS,
});

const getDrinksSuccess = (drinks) => ({
  type: GET_DRINKS_SUCCESS,
  payload: drinks,
});

const getDrinksError = (error) => ({
  type: GET_DRINKS_ERROR,
  payload: error,
});

export const fetchDrinks = () => (dispatch) => {
  dispatch(getDrinks());

  const url = `${baseCocktailDbUrl}/search.php?s=`;

  return fetch(url)
    .then((response) => response.json())
    .then(({ drinks }) => dispatch(getDrinksSuccess(drinks)))
    .catch((error) => dispatch(getDrinksError(error)));
};
