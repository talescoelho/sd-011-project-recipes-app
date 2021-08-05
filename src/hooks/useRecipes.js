import { useSelector } from 'react-redux';
import { createSlice } from '@reduxjs/toolkit';

const BASE_URL = 'https://www.themealdb.com/api/json/v1/1/';
const initialState = {
  recipes: [],
  isLoading: false,
  error: null,
};

const reducers = {
  requestRecipes: (state) => {
    state.isLoading = true;
    state.error = null;
  },
  reportError: (state, { payload }) => {
    state.isLoading = false;
    state.error = payload;
  },

  receiveRecipes: (state, { payload }) => {
    state.recipes = payload;
    state.isLoading = false;
  },
};

const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers,
});

const { actions } = recipesSlice;

export const { reducer } = recipesSlice;

export const { requestRecipes, receiveRecipes, reportError } = actions;

export const useRecipes = () => useSelector((state) => state.recipes);

export const fetchRecipes = ({ searchTerm, category }) => async (dispatch) => {
  const URL_SEARCH_OPTION = {
    ingrediente: 'filter.php?i=',
    nome: 'search.php?s=',
    primeira_letra: 'search.php?f=',
    categorys: 'filter.php?c=',
    allcategorys: 'search.php?s',
  };
  const urlModifier = URL_SEARCH_OPTION[category] || '';
  dispatch(requestRecipes());
  try {
    const response = await fetch(`${BASE_URL}${urlModifier}${searchTerm}`);
    const result = await response.json();
    dispatch(receiveRecipes(result.meals));
  } catch (error) {
    dispatch(reportError(error.toString()));
  }
};
