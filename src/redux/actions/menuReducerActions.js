export const REQUEST_MENU = 'REQUEST_MENU';
export const RECEIVE_MENU_SUCCESS = 'RECEIVE_MENU_SUCCESS';
export const RECEIVE_MENU_FAILURE = 'RECEIVE_MENU_FAILURE';

const menuRequest = () => ({
  type: REQUEST_MENU,
});

const menuReceiveSuccess = (menu) => ({
  type: RECEIVE_MENU_SUCCESS,
  menu,
});

const menuReceiveFailure = () => ({
  type: RECEIVE_MENU_FAILURE,
  error: '404',
});

const handleMealsResponse = (meals) => {
  const maxMeals = 12;
  const filteredMeals = meals
    .reduce((
      acc,
      { idMeal, strMeal, strMealThumb },
      index,
    ) => {
      if (index < maxMeals) {
        acc = [
          ...acc,
          {
            idMeal,
            strMeal,
            strMealThumb,
          },
        ];
      }
      return acc;
    }, []);

  return filteredMeals;
};

export const requestMealsMenu = () => (dispatch) => {
  dispatch(menuRequest());
  return (
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
      .then((response) => response.json())
      .then(async ({ meals }) => {
        const response = await handleMealsResponse(meals);
        dispatch(menuReceiveSuccess(response));
      })
      .catch(() => dispatch(menuReceiveFailure()))
  );
};

export const requestDrinkMenu = () => (dispatch) => {
  dispatch(menuRequest());
  return (
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
      .then((response) => response.json())
      .then(({ drinks }) => {
        const maxDrinks = 12;
        const filteredDrinks = drinks
          .reduce((
            acc,
            { idDrink, strDrink, strDrinkThumb },
            index,
          ) => {
            if (index < maxDrinks) {
              acc = [
                ...acc,
                {
                  idDrink,
                  strDrink,
                  strDrinkThumb,
                },
              ];
            }
            return acc;
          }, []);

        dispatch(menuReceiveSuccess(filteredDrinks));
      })
      .catch(() => dispatch(menuReceiveFailure()))
  );
};

export const REQUEST_MENU_FILTERS = 'REQUEST_MENU_FILTERS';
export const RECEIVE_MENU_FILTERS_SUCCESS = 'RECEIVE_MENU_FILTERS_SUCCESS';
export const RECEIVE_MENU_FILTERS_FAILURE = 'RECEIVE_MENU_FILTERS_FAILURE';

const requestFilterOptions = () => ({
  type: REQUEST_MENU_FILTERS,
});

const requestFilterOptionsSuccess = (options) => ({
  type: RECEIVE_MENU_FILTERS_SUCCESS,
  options,
});

const requestFilterOptionsFailure = () => ({
  type: RECEIVE_MENU_FILTERS_FAILURE,
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

export const requestDrinksFilters = () => (dispatch) => {
  dispatch(requestFilterOptions());
  return (
    fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
      .then((response) => response.json())
      .then(({ drinks }) => {
        const maxFilterOptions = 5;
        const filteredOptions = drinks
          .reduce((acc, curr, index) => {
            if (index < maxFilterOptions) {
              acc = [...acc, curr.strCategory];
            }
            return acc;
          }, []);
        dispatch(requestFilterOptionsSuccess(filteredOptions));
      })
      .catch(() => dispatch(requestFilterOptionsFailure()))
  );
};

export const requestMealsByFilter = (filter) => (dispatch) => {
  dispatch(menuRequest());
  return (
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${filter}`)
      .then((response) => response.json())
      .then(async ({ meals }) => {
        const response = await handleMealsResponse(meals);
        dispatch(menuReceiveSuccess(response));
      })
      .catch(() => dispatch(menuReceiveFailure()))
  );
};

// export const requestDrinksByFilter = (filter) => (dispatch) => {

// }
