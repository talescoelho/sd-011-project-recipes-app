export const ADD_EMAIL = 'ADD_EMAIL';
export const ADD_INGREDIENT_MEAL = 'ADD_INGREDIENT_MEAL';
export const ADD_INGREDIENT_DRINK = 'ADD_INGREDIENT_DRINK';
export const DELETE_INGREDIENT_MEAL = 'DELETE_INGREDIENT_MEAL';
export const DELETE_INGREDIENT_DRINK = 'DELETE_INGREDIENT_DRINK';
export const ADD_DONE_RECIPE = 'ADD_DONE_RECIPE';
export const RECEIVE_API = 'RECEIVE_API';
export const REQUEST_API = 'REQUEST_API';
export const FAILED_REQUEST = 'FAILED_REQUEST';
export const UPDATE_ARRAY = 'UPDATE_ARRAY';

export const addEmail = (email) => ({
  type: ADD_EMAIL,
  email,
});

export const addIngredientMeal = (ingredient) => ({
  type: ADD_INGREDIENT_MEAL,
  ingredient,
});

export const addIngredientDrink = (ingredient) => ({
  type: ADD_INGREDIENT_DRINK,
  ingredient,
});

export const deleteIngredientMeal = (ingredient) => ({
  type: DELETE_INGREDIENT_MEAL,
  ingredient,
});

export const deleteIngredientDrink = (ingredient) => ({
  type: DELETE_INGREDIENT_DRINK,
  ingredient,
});

export const addDoneRecipe = (recipe, date) => ({
  type: ADD_DONE_RECIPE,
  recipe,
  date,
});

const receiveAPI = (json) => ({
  type: RECEIVE_API,
  payload: json,
});

const requestAPI = () => ({
  type: REQUEST_API,
});

const failedRequest = (error) => ({
  type: FAILED_REQUEST,
  payload: error,
});

export function fetchAPI(urlType, id) {
  return (dispatch) => {
    dispatch(requestAPI());
    const url = `https://www.the${urlType}db.com/api/json/v1/1/lookup.php?i=${id}`;
    return fetch(url)
      .then((r) => r.json()
        .then(
          (json) => dispatch(receiveAPI(json)),
          (error) => dispatch(failedRequest(error)),
        ));
  };
}

export const updateArray = (array) => ({
  type: UPDATE_ARRAY,
  payload: array,
});
