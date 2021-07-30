export const REQUEST_API = 'REQUEST_API';
export const REQUEST_FOOD_API_SUCCESS = 'REQUEST_FOOD_API_SUCCESS';
export const REQUEST_DRINK_API_SUCCESS = 'REQUEST_DRINK_API_SUCCESS';
export const REQUEST_FOOD_OR_DRINK_API_ERROR = 'REQUEST_FOOD_OR_DRINK_API_ERROR';

export const requestApi = () => ({
  type: REQUEST_API,
});

export const requestFoodApiSuccess = () => ({
  type: REQUEST_FOOD_API_SUCCESS,
  payload,
});

export const requestDrinkApiSuccess = () => ({
  type: REQUEST_DRINK_API_SUCCESS,
  payload,
});

export const requestFoodOrDrinkApiError = () => ({
  type: REQUEST_FOOD_OR_DRINK_API_ERROR,
  payload,
});
