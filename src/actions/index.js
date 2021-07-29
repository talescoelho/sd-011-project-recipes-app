export const EMAIL = 'EMAIL';
export const getEmail = (payload) => ({ type: EMAIL, email: payload });

export const REQUEST_SEARCH = 'REQUEST_SEARCH';
export const requestSearch = () => ({ type: REQUEST_SEARCH });

export const REQUEST_SUCCESS_SEARCH = 'REQUEST_SUCCESS_SEARCH';
export const requestSuccessSearch = (payload) => ({
  type: REQUEST_SUCCESS_SEARCH,
  payload });
