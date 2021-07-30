export const REQUEST_API = 'REQUEST_API';
export const REQUEST_FOOD_API_SUCESS = 'REQUEST_FOOD_API_SUCESS';
export const REQUEST_FOOD_API_ERROR = 'REQUEST_FOOD_API_ERROR';
export const REQUEST_DRINK_API_SUCESS = 'REQUEST_DRINK_API_SUCESS';
export const REQUEST_DRINK_API_ERROR = 'REQUEST_DRINK_API_ERROR';

export const requestApi = () => ({
  type: REQUEST_API,
});

export const requestFoodApiSucess = () => ({
  type: REQUEST_FOOD_API_SUCESS,
  payload,
});

export const requestFoodApiError = () => ({
  type: REQUEST_FOOD_API_ERROR,
  payload,
});

export const requestDrinkApiSucess = () => ({
  type: REQUEST_DRINK_API_SUCESS,
  payload,
});

export const requestDrinkApiError = () => ({
  type: REQUEST_DRINK_API_ERROR,
  payload,
});
