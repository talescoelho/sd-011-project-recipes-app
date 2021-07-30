import { requestCategories,
  requestSuccessCategories,
  requestFilterCategories,
  requestSuccessFilterCategories } from '../actions/mainPageRecipe';

export async function categoriesFetch(mealOrDrink) {
  let response;
  if (mealOrDrink === 'meal') {
    response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
  }

  if (mealOrDrink === 'drink') {
    response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
  }
  // console.log(response);
  return async (dispatch) => {
    try {
      dispatch(requestCategories());
      const data = await response.json();
      // console.log(data);
      dispatch(requestSuccessCategories(data));
    } catch (error) {
      console.error(error);
    }
  };
}

export async function filterByCategorieFetch(mealOrDrink, category) {
  let response;
  if (mealOrDrink === 'meal') {
    response = await fetch(`www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
  }
  if (mealOrDrink === 'drink') {
    response = await fetch(
      `www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`,
    );
  }

  return async (dispatch) => {
    try {
      dispatch(requestFilterCategories());
      const data = await response.json();
      // console.log(data);
      dispatch(requestSuccessFilterCategories(data));
    } catch (error) {
      console.error(error);
    }
  };
}
