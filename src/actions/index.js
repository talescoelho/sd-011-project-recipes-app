import fetchFromApi from '../services/FetchFromApi';

export const GET_FOODS = 'GET_FOODS';
export const GET_FOODS_SUCCESS = 'GET_FOODS_SUCCESS';
export const GET_FOODS_FAIL = 'GET_FOODS_FAIL';
export const GET_DRINKS = 'GET_DRINKS';
export const GET_DRINKS_SUCCESS = 'GET_DRINKS_SUCCESS';
export const GET_CATEGORIES_FOODS_SUCCESS = 'GET_CATEGORIES_FOODS_SUCCESS';
export const GET_CATEGORIES_DRINKS_SUCCESS = 'GET_CATEGORIES_DRINKS_SUCCESS';
export const FILTERED_FOODS_PER_CATEGORY = 'FILTERED_FOODS_PER_CATEGORY';
export const FILTERED_DRINKS_PER_CATEGORY = 'FILTERED_DRINKS_PER_CATEGORY';

// -------------------------FUNÇÕES PARA REQUISIÇÃO DAS RECEITAS -----------------------
export const getFoods = () => ({
  type: GET_FOODS,
});

export const getFoodsSuccess = (payload) => ({
  type: GET_FOODS_SUCCESS,
  payload,
});

// export const getFoodsFailed = (payload) => ({
//   type: GET_FOODS_FAIL,
//   payload,
// });

export const getFoodFromApi = () => async (dispatch) => {
  dispatch(getFoods());
  try {
    const URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
    const dataFromApi = await fetchFromApi(URL);
    dispatch(getFoodsSuccess(dataFromApi.meals));
  } catch (error) {
    console.error(error);
  }
};

export const getDrinks = () => ({
  type: GET_DRINKS,
});

export const getDrinksSuccess = (payload) => ({
  type: GET_DRINKS_SUCCESS,
  payload,
});

export const getDrinksFromApi = () => async (dispatch) => {
  dispatch(getDrinks());
  try {
    const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
    const dataFromApi = await fetchFromApi(URL);
    dispatch(getDrinksSuccess(dataFromApi.drinks));
  } catch (error) {
    console.error(error);
  }
};
// ----------------FUNÇÕES PARA REQUISIÇÃO DAS CATEGORIAS----------------------------------------

export const getCategoriesFoodsSuccess = (payload) => ({
  type: GET_CATEGORIES_FOODS_SUCCESS,
  payload,
});

export const getCategoriesDrinksSuccess = (payload) => ({
  type: GET_CATEGORIES_DRINKS_SUCCESS,
  payload,
});

export const getCategoriesFromApi = (mealsOrDrinks) => async (dispatch) => {
  if (mealsOrDrinks === 'meals') {
    dispatch(getFoods());
    try {
      const URL = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
      const dataFromApi = await fetchFromApi(URL);
      dispatch(getCategoriesFoodsSuccess(dataFromApi.meals));
    } catch (error) {
      console.error(error);
    }
  } else {
    dispatch(getDrinks());
    try {
      const URL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
      const dataFromApi = await fetchFromApi(URL);
      dispatch(getCategoriesDrinksSuccess(dataFromApi.drinks));
    } catch (error) {
      console.error(error);
    }
  }
};

// -----------------------------FUNÇÃO PARA RESQUISIÇÃO DA BUSCAR--------------------------------------------------------------

export const getSearchsFromApi = (mealsOrDrinks, input, radio) => async (dispatch) => {
  if (mealsOrDrinks === 'drinks') {
    dispatch(getDrinks());
    try {
      let URL = '';
      switch (radio) {
      case 'ingredient':
        URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${input}`;
        break;
      case 'name':
        URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`;
        break;
      default:
        URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${input}`;
        break;
      }
      const dataFromApi = await fetchFromApi(URL);
      dispatch(getDrinksSuccess(dataFromApi.drinks));
    } catch (error) {
      console.error(error);
    }
  } else {
    dispatch(getFoods());
    try {
      let URL = '';
      switch (radio) {
      case 'ingredient':
        URL = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${input}`;
        break;
      case 'name':
        URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`;
        break;
      default:
        URL = `https://www.themealdb.com/api/json/v1/1/search.php?f=${input}`;
        break;
      }
      const dataFromApi = await fetchFromApi(URL);
      dispatch(getFoodsSuccess(dataFromApi.meals));
    } catch (error) {
      console.error(error);
    }
  }
};

// -----------------------------FUNÇÃO PARA GEStÃO LOGIN USUÁRIO--------------------------------------------------------------

function SendEmail(email) {
  const user = {
    email,
  };
  localStorage.setItem('mealsToken', JSON.stringify(1));
  localStorage.setItem('cocktailsToken', JSON.stringify(1));
  localStorage.setItem('user', JSON.stringify(user));
  return {
    type: 'ADD_EMAIL',
    email,
  };
}

export default SendEmail;

// ------------------------Requisição de Itens por Categoria ---------------

export const filterFoodsPerCategory = (payload) => ({
  type: FILTERED_FOODS_PER_CATEGORY,
  payload,
});

export const filterDrinksPerCategory = (payload) => ({
  type: FILTERED_DRINKS_PER_CATEGORY,
  payload,
});

export const getPerCategoriesFromApi = (mealsOrDrinks, category) => async (dispatch) => {
  if (mealsOrDrinks === 'meals') {
    dispatch(getFoods());
    try {
      const URL = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
      const dataFromApi = await fetchFromApi(URL);
      dispatch(filterFoodsPerCategory(dataFromApi.meals));
    } catch (error) {
      console.error(error);
    }
  } else {
    dispatch(getDrinks());
    try {
      const URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`;
      const dataFromApi = await fetchFromApi(URL);
      dispatch(filterDrinksPerCategory(dataFromApi.drinks));
    } catch (error) {
      console.error(error);
    }
  }
};
