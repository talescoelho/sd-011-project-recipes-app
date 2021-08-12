import { useSelector } from 'react-redux';
import { createSlice } from '@reduxjs/toolkit';

const BASE_URL = 'list.php?a=list';
const initialState = {
  areas: [],
  onLoading: false,
  CategoryError: null,
};

const reducers = {
  requestAreas: (state) => {
    state.onLoading = true;
    state.CategoryError = null;
  },
  reportError: (state, { payload }) => {
    state.onLoading = false;
    state.CategoryError = payload;
  },

  receiveAreas: (state, { payload }) => {
    state.areas = payload;
    state.onLoading = false;
  },
};

const areaSlice = createSlice({
  name: 'areas',
  initialState,
  reducers,
});

const { actions } = areaSlice;

export const { reducer } = areaSlice;

export const { requestAreas, receiveAreas, reportError } = actions;

export const useAreas = () => useSelector((state) => state.areas);

export const fetchAreas = ({ category }) => async (dispatch) => {
  const URL_SEARCH_OPTION = {
    meals: 'https://www.themealdb.com/api/json/v1/1/',
    drinks: 'https://www.thecocktaildb.com/api/json/v1/1/',
  };
  const urlModifier = URL_SEARCH_OPTION[category] || '';
  dispatch(requestAreas());
  try {
    const response = await fetch(`${urlModifier}${BASE_URL}`);
    const result = await response.json();
    if (category === 'meals') {
      dispatch(receiveAreas(result.meals));
    }
    if (category === 'drinks') {
      dispatch(receiveAreas(result.meals));
    }
  } catch (error) {
    if (error instanceof SyntaxError) {
      dispatch(receiveAreas(null));
    } else {
      dispatch(reportError(error.toString()));
    }
  }
};
