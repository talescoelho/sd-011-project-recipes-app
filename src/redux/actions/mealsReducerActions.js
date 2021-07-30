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
        const maxMeals = 11;
        const filteredMeals = meals
          .reduce((
            acc,
            { idMeal, strMeal, strCategory, strArea, strMealThumb },
            index,
          ) => {
            if (index <= maxMeals) {
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
