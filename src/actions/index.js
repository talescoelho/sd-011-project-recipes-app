import { getXFirstElementsFromArray } from '../helpers/utils';

export const GET_RECIPES = 'GET_RECIPES';
export const GET_RECIPES_SUCCESS = 'GET_RECIPES_SUCCESS';
export const GET_RECIPES_ERROR = 'GET_RECIPES_ERROR';
export const GET_RECIPES_CATEGORIES = 'GET_RECIPES_CATEGORIES';
export const GET_RECIPES_CATEGORIES_SUCCESS = 'GET_RECIPES_CATEGORIES_SUCCESS';
export const GET_RECIPES_CATEGORIES_ERROR = 'GET_RECIPES_CATEGORIES_ERROR';
export const GET_HEADER_SEARCH = 'GET_HEADER_SEARCH';
export const GET_HEADER_SEARCH_SUCCESS = 'GET_HEADER_SEARCH_SUCCESS';
export const GET_HEADER_SEARCH_ERROR = 'GET_HEADER_SEARCH_ERROR';
export const MEAL_DETAIL = 'MEAL_DETAIL';
export const MEAL_DETAIL_SUCCESS = 'MEAL_DETAIL_SUCCESS';
export const MEAL_DETAIL_ERROR = 'MEAL_DETAIL_ERROR';
export const DRINK_DETAIL = 'DRINK_DETAIL';
export const DRINK_DETAIL_SUCCESS = 'DRINK_DETAIL_SUCCESS';
export const DRINK_DETAIL_ERROR = 'DRINK_DETAIL_ERROR';
export const HEADER_SEARCH_RESET_ERROR = 'HEADER_SEARCH_RESET_ERROR';
export const SET_SELECTED_CATEGORY = 'SET_SELECTED_CATEGORY';

const recipesQuantity = 12;
const baseMealDbUrl = 'https://www.themealdb.com/api/json/v1/1';
const baseCocktailDbUrl = 'https://www.thecocktaildb.com/api/json/v1/1';

const getRecipes = () => ({
  type: GET_RECIPES,
});

const getRecipesSuccess = (meals) => ({
  type: GET_RECIPES_SUCCESS,
  payload: meals,
});

const getRecipesError = (error) => ({
  type: GET_RECIPES_ERROR,
  payload: error,
});

export const fetchRecipes = (type, category = null) => (dispatch) => {
  dispatch(getRecipes());

  const baseUrl = type === 'meals' ? baseMealDbUrl : baseCocktailDbUrl;
  const url = category
    ? `${baseUrl}/filter.php?c=${category}`
    : `${baseUrl}/search.php?s=`;

  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const recipes = getXFirstElementsFromArray(
        type === 'meals' ? data.meals : data.drinks, recipesQuantity,
      );
      dispatch(getRecipesSuccess(recipes));
    })
    .catch((error) => dispatch(getRecipesError(error)));
};

const getRecipesCategories = () => ({
  type: GET_RECIPES_CATEGORIES,
});

const getRecipesCategoriesSuccess = (payload) => ({
  type: GET_RECIPES_CATEGORIES_SUCCESS,
  payload,
});

const getRecipesCategoriesError = (error) => ({
  type: GET_RECIPES_CATEGORIES_ERROR,
  payload: error,
});

export const fetchRecipesCategories = (type) => (dispatch) => {
  dispatch(getRecipesCategories());

  const url = `${type === 'comidas' ? baseMealDbUrl : baseCocktailDbUrl}/list.php?c=list`;

  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const info = type === 'comidas' ? data.meals : data.drinks;
      const categories = info.map(({ strCategory }) => strCategory);
      dispatch(getRecipesCategoriesSuccess({ categories, type }));
    })
    .catch((error) => dispatch(getRecipesCategoriesError(error)));
};

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

export const fetchHeaderSearch = (type, filter, keyWord) => (dispatch) => {
  dispatch(getHeaderSearch());

  const url = type === 'comidas' ? baseMealDbUrl : baseCocktailDbUrl;

  // const setUrl = { ingrediente: `${url}/filter.php?i=${keyWord}`,
  //   nome: `${url}/search.php?s=${keyWord}`,
  //   'primeira-letra': `${url}/search.php?f=${keyWord}` };

  // const urlFilter = setUrl[filter];
  let urlFilter = '';

  switch (filter) {
  case 'ingrediente':
    urlFilter = `${url}/filter.php?i=${keyWord}`;
    break;
  case 'nome':
    urlFilter = `${url}/search.php?s=${keyWord}`;
    break;
  case 'primeira-letra':
    urlFilter = `${url}/search.php?f=${keyWord}`;
    break;
  default:
    return null;
  }

  return fetch(urlFilter)
    .then((response) => response.json())
    .then((data) => {
      const info = type === 'comidas' ? data.meals : data.drinks;
      const results = info.map((item) => item);
      dispatch(getHeaderSearchSuccess({ results, type, filter, keyWord }));
    })
    .catch((error) => dispatch(getHeaderSearchError(error)));
};

const mealDetail = () => ({
  type: MEAL_DETAIL,
});

const mealDetailSuccess = (payload) => ({
  type: MEAL_DETAIL_SUCCESS,
  payload,
});

const mealDetailError = (payload) => ({
  type: MEAL_DETAIL_ERROR,
  payload,
});

const drinkDetail = () => ({
  type: DRINK_DETAIL,
});

const drinkDetailSuccess = (payload) => ({
  type: DRINK_DETAIL_SUCCESS,
  payload,
});

const drinkDetailError = (payload) => ({
  type: DRINK_DETAIL_ERROR,
  payload,
});

export const fetchRecipeDetail = (type, id) => (dispatch) => {
  if (type === 'comidas') dispatch(mealDetail());
  else dispatch(drinkDetail());

  const url = `${type === 'comidas'
    ? baseMealDbUrl : baseCocktailDbUrl}/lookup.php?i=${id}`;

  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const info = type === 'comidas' ? data.meals : data.drinks;
      if (type === 'comidas') dispatch(mealDetailSuccess(info));
      else dispatch(drinkDetailSuccess(info));
    })
    .catch((error) => {
      if (type === 'comidas') dispatch(mealDetailError(error));
      else dispatch(drinkDetailError(error));
    });
};

export const headerSearchResetError = () => ({
  type: HEADER_SEARCH_RESET_ERROR,
});

export const setSelectedCategory = (payload) => ({
  type: SET_SELECTED_CATEGORY,
  payload,
});
