const fetchFoodOrDrinkApi = (url, actionSucess, actionError) => (dispatch) => {
  dispatch(requestApi());
  return fetch(url)
    .then((response) => response.json())
    .then((data) => dispatch(actionSucess(data)))
    .catch((error) => dispatch(actionError(error)));
};

export default fetchFoodOrDrinkApi;
