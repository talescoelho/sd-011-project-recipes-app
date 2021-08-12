import { useSelector } from 'react-redux';
import { createSlice } from '@reduxjs/toolkit';

const BASE_URL = 'list.php?i=list';
const initialState = {
  ingredients: [],
  isLoading: false,
  error: null,
};

const reducers = {
  requestIngredients: (state) => {
    state.isLoading = true;
    state.ingredients = [];
    state.error = null;
  },
  reportError: (state, { payload }) => {
    state.isLoading = false;
    state.error = payload;
  },

  receiveIngredients: (state, { payload }) => {
    state.ingredients = payload;
    state.isLoading = false;
  },
};

const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers,
});

const { actions } = ingredientsSlice;

export const { reducer } = ingredientsSlice;

export const { requestIngredients, reportError, receiveIngredients } = actions;

export const useIngredients = () => useSelector((state) => state.ingredients);

export const fetchIngredients = ({ category }) => async (dispatch) => {
  const URL_SEACH_OPTIONS = {
    meals: 'https://www.themealdb.com/api/json/v1/1/',
    drinks: 'https://www.thecocktaildb.com/api/json/v1/1/',
  };
  const urlModifier = URL_SEACH_OPTIONS[category] || '';
  dispatch(requestIngredients());
  try {
    const respone = await fetch(`${urlModifier}${BASE_URL}`);
    const result = await respone.json();
    if (category === 'meals') {
      dispatch(receiveIngredients(result.meals));
    } else {
      dispatch(receiveIngredients(result.drinks));
    }
  } catch (error) {
    if (error instanceof SyntaxError) {
      dispatch(receiveIngredients(null));
    } else {
      dispatch(reportError(error.toString()));
    }
  }
};
