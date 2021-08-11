import { useSelector } from 'react-redux';
import { createSlice } from '@reduxjs/toolkit';

const BASE_URL = 'list.php?c=list';
const initialState = {
  categorys: [],
  onLoading: false,
  CategoryError: null,
};

const reducers = {
  requestCategory: (state) => {
    state.onLoading = true;
    state.CategoryError = null;
  },
  reportError: (state, { payload }) => {
    state.onLoading = false;
    state.CategoryError = payload;
  },

  receiveCategory: (state, { payload }) => {
    state.categorys = payload;
    state.onLoading = false;
  },
};

const cocktailsCategorySlice = createSlice({
  name: 'cocktailsCategory',
  initialState,
  reducers,
});

const { actions } = cocktailsCategorySlice;

export const { reducer } = cocktailsCategorySlice;

export const { requestCategory, receiveCategory, reportError } = actions;

export const useCategory = () => useSelector((state) => state.categorys);

export const fetchCategory = ({ category }) => async (dispatch) => {
  const URL_SEARCH_OPTION = {
    meals: 'https://www.themealdb.com/api/json/v1/1/',
    drinks: 'https://www.thecocktaildb.com/api/json/v1/1/',
  };
  const urlModifier = URL_SEARCH_OPTION[category] || '';
  dispatch(requestCategory());
  try {
    const response = await fetch(`${urlModifier}${BASE_URL}`);
    const result = await response.json();
    if (category === 'meals') {
      dispatch(receiveCategory(result.meals));
    } else {
      dispatch(receiveCategory(result.drinks));
    }
  } catch (error) {
    if (error instanceof SyntaxError) {
      dispatch(receiveCategory(null));
    } else {
      dispatch(reportError(error.toString()));
    }
  }
};
