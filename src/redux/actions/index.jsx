export const FETCH_STARTED = 'FETCH_STARTED';
export const FETCH_SUCESS = 'FETCH_SUCESS';
export const FETCH_ERROR = 'FETCH_ERROR';

export const fetchStarted = () => ({
  type: FETCH_STARTED,
});

export const fetchSucess = (payload) => ({
  type: FETCH_SUCESS,
  payload,
});

export const fetchError = (payload) => ({
  type: FETCH_ERROR,
  payload,
});

export const fetchApi = (url) => async (dispatch) => {
  try {
    dispatch(fetchStarted());
    const response = await fetch(url);
    const { meals } = await response.json();
    return dispatch(fetchSucess(meals));
  } catch (error) {
    dispatch(fetchError(error.message));
  }
};
