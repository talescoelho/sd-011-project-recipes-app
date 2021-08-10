import {
  listAllMealsIngredients,
  listAllDrinksIngredients,
} from '../../services/requestMenu';

export const REQUEST_OPTIONS = 'REQUEST_OPTIONS';
export const RECEIVE_OPTIONS_SUCCESS = 'RECEIVE_OPTIONS_SUCCESS';
export const RECEIVE_OPTIONS_FAILURE = 'RECEIVE_OPTIONS_FAILURE';

const handleMealsIngredients = (meals) => {
  const maxMeals = 12;
  const filteredMeals = meals
    .reduce((
      acc,
      { strIngredient },
      index,
    ) => {
      if (index < maxMeals) {
        acc = [
          ...acc,
          {
            strMeal: strIngredient,
            strMealThumb: `https://www.themealdb.com/images/ingredients/${strIngredient}-Small.png`,
          },
        ];
      }
      return acc;
    }, []);

  return filteredMeals;
};

const handleDrinksIngredients = (drinks) => {
  const maxDrinks = 12;
  const filteredDrinks = drinks.reduce((
    acc,
    { strIngredient1 },
    index,
  ) => {
    if (index < maxDrinks) {
      acc = [
        ...acc,
        {
          strDrink: strIngredient1,
          strDrinkThumb: `https://www.thecocktaildb.com/images/ingredients/${strIngredient1}-Small.png`,
        },
      ];
    }
    return acc;
  }, []);

  return filteredDrinks;
};

const sendRequestOptions = () => ({
  type: REQUEST_OPTIONS,
});

const receiveOptionsSuccess = (data) => ({
  type: RECEIVE_OPTIONS_SUCCESS,
  data,
});

const receiveOptionsFailure = () => ({
  type: RECEIVE_OPTIONS_FAILURE,
  error: '404',
});

export const requestMealsOptions = () => (dispatch) => {
  dispatch(sendRequestOptions());
  return (
    listAllMealsIngredients()
      .then(({ meals }) => {
        const response = handleMealsIngredients(meals);
        dispatch(receiveOptionsSuccess(response));
      })
      .catch(() => dispatch(receiveOptionsFailure()))
  );
};

export const requestDrinksOptions = () => (dispatch) => {
  dispatch(sendRequestOptions());
  return (
    listAllDrinksIngredients()
      .then(({ drinks }) => {
        const response = handleDrinksIngredients(drinks);
        dispatch(receiveOptionsSuccess(response));
      })
      .catch(() => dispatch(receiveOptionsFailure()))
  );
};
