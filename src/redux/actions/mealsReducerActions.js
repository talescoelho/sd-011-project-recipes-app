export const REQUEST_MEALS = 'REQUEST_MEALS';
export const RECEIVE_MEALS_SUCCESS = 'RECEIVE_MEALS';
export const RECEIVE_MEALS_FAILURE = 'RECEIVE_MEALS_FAILURE';

const mealsRequest = () => ({
  type: REQUEST_MEALS,
});

const mealsReceiveSuccess = (meals) => ({
  type: RECEIVE_MEALS_SUCCESS,
  meals,
});

const mealsReceiveFailure = () => ({
  type: RECEIVE_MEALS_FAILURE,
  error: '404',
});

export const requestMealsAPI = () => (dispatch) => {
  dispatch(mealsRequest());
  return (
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
      .then((response) => response.json())
      .then(({ meals }) => {
        const maxMeals = 12;
        const filteredMeals = meals
          .reduce((
            acc,
            { idMeal, strMeal, strCategory, strArea, strMealThumb },
            index,
          ) => {
            if (index < maxMeals) {
              acc = [
                ...acc,
                {
                  idMeal,
                  strMeal,
                  strCategory,
                  strArea,
                  strMealThumb,
                },
              ];
            }
            return acc;
          }, []);

        dispatch(mealsReceiveSuccess(filteredMeals));
      })
      .catch(() => dispatch(mealsReceiveFailure()))
  );
};

export const REQUEST_MEALS_FILTERS = 'REQUEST_MEALS_FILTERS';
export const RECEIVE_MEALS_FILTERS_SUCCESS = 'RECEIVE_MEALS_FILTERS_SUCCESS';
export const RECEIVE_MEALS_FILTERS_FAILURE = 'RECEIVE_MEALS_FILTERS_FAILURE';

const requestFilterOptions = () => ({
  type: REQUEST_MEALS_FILTERS,
});

const requestFilterOptionsSuccess = (options) => ({
  type: RECEIVE_MEALS_FILTERS_SUCCESS,
  options,
});

const requestFilterOptionsFailure = () => ({
  type: RECEIVE_MEALS_FILTERS_FAILURE,
  error: '404',
});

export const requestMealsFilters = () => (dispatch) => {
  dispatch(requestFilterOptions());
  return (
    fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
      .then((response) => response.json())
      .then(({ meals }) => {
        const maxFilterOptions = 5;
        const filteredOptions = meals
          .reduce((acc, { strCategory }, index) => {
            if (index < maxFilterOptions) {
              acc = [...acc, strCategory];
            }
            return acc;
          }, []);
        dispatch(requestFilterOptionsSuccess(filteredOptions));
      })
      .catch(() => dispatch(requestFilterOptionsFailure()))
  );
};
