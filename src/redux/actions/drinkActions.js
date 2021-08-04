import { fetchAPIName, fetchAPICategory,
  fetchAPICategoryFilter } from '../../services/fetchAPIDrink';

export const DRINK_LIST_SUCCESS = 'DRINK_LIST_SUCCESS';
export const DRINK_CATEGORY_SUCCESS = 'DRINK_CATEGORY_SUCCESS';
export const DRINK_LIST_CATEGORY_SUCCESS = 'DRINK_LIST_CATEGORY_SUCCESS';
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY';

const drinkListSuccess = (payload) => ({
  type: DRINK_LIST_SUCCESS,
  payload,
});

export const fetchDrinkList = (name) => async (dispatch) => {
  const returnFetch = await fetchAPIName(name);
  dispatch(drinkListSuccess(returnFetch));
};

const drinkCategorySuccess = (payload) => ({
  type: DRINK_CATEGORY_SUCCESS,
  payload,
});

export const fetchDrinkCategory = (category) => async (dispatch) => {
  const returnFetch = await fetchAPICategory(category);
  dispatch(drinkCategorySuccess(returnFetch));
};

const drinkListByCategorySuccess = (payload) => ({
  type: DRINK_LIST_CATEGORY_SUCCESS,
  payload,
});

export const updateCategory = (payload) => ({
  type: UPDATE_CATEGORY,
  payload,
});

export const fetchDrinkListByCategory = (category) => async (dispatch) => {
  dispatch(updateCategory(category));
  const returnFetch = await fetchAPICategoryFilter(category);
  dispatch(drinkListByCategorySuccess(returnFetch));
};
