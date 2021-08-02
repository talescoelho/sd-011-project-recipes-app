export const FETCH_MEALS_STARTED = 'FETCH_MEALS_STARTED';
export const FETCH_MEALS_SUCESS = 'FETCH_MEALS_SUCESS';
export const FETCH_MEALS_ERROR = 'FETCH_MEALS_ERROR';
export const FETCH_DRINKS_STARTED = 'FETCH_DRINKS_STARTED';
export const FETCH_DRINKS_SUCESS = 'FETCH_DRINKS_SUCESS';
export const FETCH_DRINKS_ERROR = 'FETCH_DRINKS_ERROR';
export const FETCH_BOTH_STARTED = 'FETCH_BOTH_STARTED';
export const FETCH_BOTH_SUCESS = 'FETCH_BOTH_SUCESS';
export const FETCH_BOTH_ERROR = 'FETCH_BOTH_ERROR';
export const INPUT_HANDLE = 'INPUT_HANDLE';

export const fetchMealStarted = () => ({
  type: FETCH_MEALS_STARTED,
});

export const fetchMealSucess = (payload) => ({
  type: FETCH_MEALS_SUCESS,
  payload,
});

export const fetchMealError = (payload) => ({
  type: FETCH_MEALS_ERROR,
  payload,
});

export const fetchDrinkStarted = () => ({
  type: FETCH_DRINKS_STARTED,
});

export const fetchDrinkSucess = (payload) => ({
  type: FETCH_DRINKS_SUCESS,
  payload,
});

export const fetchDrinkError = (payload) => ({
  type: FETCH_DRINKS_ERROR,
  payload,
});

export const fetchBothStarted = () => ({
  type: FETCH_BOTH_STARTED,
});

export const fetchBothSucess = (payload) => ({
  type: FETCH_BOTH_SUCESS,
  payload,
});

export const fetchBothError = (payload) => ({
  type: FETCH_BOTH_ERROR,
  payload,
});

export const filterHandle = ({ name, value }) => ({
  type: INPUT_HANDLE,
  name,
  value,
});

export const fetchMeal = () => async (dispatch) => {
  try {
    dispatch(fetchMealStarted());
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    const data = await response.json();
    return dispatch(fetchMealSucess(data));
  } catch (error) {
    dispatch(fetchMealError(error.message));
  }
};

export const fetchDrink = () => async (dispatch) => {
  try {
    dispatch(fetchDrinkStarted());
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
    const data = await response.json();
    return dispatch(fetchDrinkSucess(data));
  } catch (error) {
    dispatch(fetchDrinkError(error.message));
  }
};

export const fetchApi = (url) => async (dispatch) => {
  try {
    dispatch(fetchBothStarted());
    const response = await fetch(url);
    const data = await response.json();
    return dispatch(fetchBothSucess(data));
  } catch (error) {
    dispatch(fetchBothError(error.message));
  }
};
