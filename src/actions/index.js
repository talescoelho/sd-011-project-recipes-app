export const GET_MEALS = 'GET_MEALS';
export const GET_MEALS_SUCCESS = 'GET_MEALS_SUCCESS';
export const GET_MEALS_ERROR = 'GET_MEALS_ERROR';
export const GET_DRINKS = 'GET_DRINKS';
export const GET_DRINKS_SUCCESS = 'GET_DRINKS_SUCCESS';
export const GET_DRINKS_ERROR = 'GET_DRINKS_ERROR';
export const GET_RECIPES_CATEGORIES = 'GET_RECIPES_CATEGORIES';
export const GET_RECIPES_CATEGORIES_SUCCESS = 'GET_RECIPES_CATEGORIES_SUCCESS';
export const GET_RECIPES_CATEGORIES_ERROR = 'GET_RECIPES_CATEGORIES_ERROR';
export const GET_HEADER_SEARCH = 'GET_HEADER_SEARCH';
export const GET_HEADER_SEARCH_SUCCESS = 'GET_HEADER_SEARCH_SUCCESS';
export const GET_HEADER_SEARCH_ERROR = 'GET_HEADER_SEARCH_ERROR';

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

const getDrinksCategories = () => ({
  type: GET_RECIPES_CATEGORIES,
});

const getDrinksCategoriesSuccess = (payload) => ({
  type: GET_RECIPES_CATEGORIES_SUCCESS,
  payload,
});

const getDrinksCategoriesError = (error) => ({
  type: GET_RECIPES_CATEGORIES_ERROR,
  payload: error,
});

export const fetchRecipesCategories = (type) => (dispatch) => {
  dispatch(getDrinksCategories());

  const url = `${type === 'comidas' ? baseMealDbUrl : baseCocktailDbUrl}/list.php?c=list`;

  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const info = type === 'comidas' ? data.meals : data.drinks;
      const categories = info.map(({ strCategory }) => strCategory);
      dispatch(getDrinksCategoriesSuccess({ categories, type }));
    })
    .catch((error) => dispatch(getDrinksCategoriesError(error)));
};

///////////////////

const getHeaderSearch = () => ({
  type: GET_HEADER_SEARCH,
});

const getHeaderSearchSuccess = (payload) => ({
  type: GET_HEADER_SEARCH_SUCCESS,
  payload,
});

const getHeaderSearchError = (error) => ({
  type: GET_HEADER_SEARCH_ERROR,
  payload: error,
});

export const fetchHeaderSearch = (type, filter) => (dispatch) => {
  dispatch(getHeaderSearch());

  const url = type === 'comidas' ? baseMealDbUrl : baseCocktailDbUrl;
  const urlFilter = '';

  switch(filter) {
  case 'ingrediente':
    urlFilter = `${url}/filter.php?i={filter}`;
  case 'nome':
    urlFilter = `${url}/search.php?s={filter}`;
  case 'primeira-letra':
    urlFilter = `${url}/search.php?f={filter}`;
  default:
    urlFilter = '';
  }

  return fetch(urlFilter)
    .then((response) => response.json())
    .then((data) => {
      const info = type === 'comidas' ? data.meals : data.drinks;
      const results = info.map((item) => item);
      dispatch(getHeaderSearchSuccess({ results, type, filter }));
    })
    .catch((error) => dispatch(getHeaderSearchError(error)));
};
