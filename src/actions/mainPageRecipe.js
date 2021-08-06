export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES';
export const requestCategories = () => ({ type: REQUEST_CATEGORIES });

export const REQUEST_SUCCESS_CATEGORIES = 'REQUEST_SUCCESS_CATEGORIES';
export const requestSuccessCategories = (payload) => ({
  type: REQUEST_SUCCESS_CATEGORIES,
  payload,
});

export const RETURN_INITIAL_STATE = 'RETURN_INITIAL_STATE';
export const returnToInitialState = () => ({ type: RETURN_INITIAL_STATE });

export const REQUEST_FILTER_CATEGORIES = 'REQUEST_FILTER_CATEGORIES';
export const requestFilterCategories = () => ({ type: REQUEST_FILTER_CATEGORIES });

export const REQUEST_SUCCESS_FILTER_CATEGORIES = 'REQUEST_SUCCESS_FILTER_CATEGORIES';
export const requestSuccessFilterCategories = (payload) => ({
  type: REQUEST_SUCCESS_FILTER_CATEGORIES,
  payload,
});

export const REQUEST_NEW_FILTER_CATEGORIES = 'REQUEST_NEW_FILTER_CATEGORIES';
export const requestNewFilterCategories = (payload) => ({
  type: REQUEST_NEW_FILTER_CATEGORIES,
  payload,
});
