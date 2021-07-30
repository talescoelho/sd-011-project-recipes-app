export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES';
export const requestCategories = () => ({ type: REQUEST_CATEGORIES });

export const REQUEST_SUCCESS_CATEGORIES = 'REQUEST_SUCCESS_CATEGORIES';
export const requestSuccessCategories = (payload) => ({
  type: REQUEST_SUCCESS_CATEGORIES,
  payload });
