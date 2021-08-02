import fetchAPI from '../../services/fetchAPI';

export const SUCCESS = 'SUCCESS';

const success = (payload) => ({
  type: SUCCESS,
  payload,
});

export const fetchFoodList = (name) => async (dispatch) => {
  const returnFetch = await fetchAPI(name);
  dispatch(success(returnFetch));
};
