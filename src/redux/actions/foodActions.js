import { fetchAPIName, fetchAPICategory,
  fetchAPICategoryFilter } from '../../services/fetchAPIFood';

export const FOOD_LIST_SUCCESS = 'FOOD_LIST_SUCCESS';
export const FOOD_CATEGORY_SUCCESS = 'FOOD_CATEGORY_SUCCESS';
export const FOOD_LIST_CATEGORY_SUCCESS = 'FOOD_LIST_CATEGORY_SUCCESS';
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY';

const foodListSuccess = (payload) => ({
  type: FOOD_LIST_SUCCESS,
  payload,
});

export const fetchFoodList = (name) => async (dispatch) => {
  const returnFetch = await fetchAPIName(name);
  dispatch(foodListSuccess(returnFetch));
};

const foodCategorySuccess = (payload) => ({
  type: FOOD_CATEGORY_SUCCESS,
  payload,
});

export const fetchFoodCategory = (category) => async (dispatch) => {
  const returnFetch = await fetchAPICategory(category);
  dispatch(foodCategorySuccess(returnFetch));
};

const foodListByCategorySuccess = (payload) => ({
  type: FOOD_LIST_CATEGORY_SUCCESS,
  payload,
});

export const updateCategory = (payload) => ({
  type: UPDATE_CATEGORY,
  payload,
});

export const fetchFoodListByCategory = (category) => async (dispatch) => {
  dispatch(updateCategory(category));
  const returnFetch = await fetchAPICategoryFilter(category);
  dispatch(foodListByCategorySuccess(returnFetch));
};
