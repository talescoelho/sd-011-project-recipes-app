import { useSelector } from 'react-redux';
import { createSlice } from '@reduxjs/toolkit';

const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/';
const initialState = {
  cocktails: [],
  isLoading: false,
  error: null,
};

const reducers = {
  requestCocktails: (state) => {
    state.isLoading = true;
    state.cocktails = [];
    state.error = null;
  },
  reportError: (state, { payload }) => {
    state.isLoading = false;
    state.error = payload;
  },

  receiveCocktails: (state, { payload }) => {
    state.cocktails = payload;
    state.isLoading = false;
  },
};

const cocktailsSlice = createSlice({
  name: 'cocktails',
  initialState,
  reducers,
});

const { actions } = cocktailsSlice;

export const { reducer } = cocktailsSlice;

export const { requestCocktails, receiveCocktails, reportError } = actions;

export const useCocktails = () => useSelector((state) => state.cocktails);

export const fetchCocktails = ({ searchTerm, category }) => async (dispatch) => {
  const URL_SEARCH_OPTION = {
    ingrediente: 'filter.php?i=',
    nome: 'search.php?s=',
    primeira_letra: 'search.php?f=',
  };
  const urlModifier = URL_SEARCH_OPTION[category] || '';
  dispatch(requestCocktails());
  try {
    const response = await fetch(`${BASE_URL}${urlModifier}${searchTerm}`);
    const result = await response.json();
    dispatch(receiveCocktails(result.drinks));
  } catch (error) {
    if (error instanceof SyntaxError) {
      dispatch(receiveCocktails(null));
    } else {
      dispatch(reportError(error.toString()));
    }
  }
};
