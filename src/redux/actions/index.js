export const REQUEST_API = 'REQUEST_API';
export const GET_RECIPES_API = 'GET_RECIPES_API';
export const GET_RECIPE_DETAILS_API = 'GET_RECIPE_DETAILS_API';

// ESTA ACTION ALTERA isLoading PARA true
export const requestApiAction = () => ({ type: REQUEST_API });

// ESTA ACTION ALTERA isLoading PARA false E SALVA O RETORNO DA API EM recipesData
export const getRecipesAction = (data) => ({ type: GET_RECIPES_API, data });

// ESTA ACTION ALTERA isLoading PARA false E SALVA O RETORNO DA API EM recipeDetailsData
export const getRecipeDetailsAction = (data) => ({ type: GET_RECIPE_DETAILS_API, data });

// ESTA ACTION CRIA O AMBIENTE THUNK PARA REQUISIÇÃO API E OBTENÇÃO DA LISTA DE RECEITAS
export const fetchRecipesAPIAction = (url, recipeType) => async (dispatch) => {
  dispatch(requestApiAction());
  try {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
    if (!json[recipeType]) {
      // eslint-disable-next-line no-alert
      alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
    }
    dispatch(getRecipesAction(json));
  } catch (error) {
    console.log(error);
  }
};

// ESTA ACTION CRIA O AMBIENTE THUNK PARA REQUISIÇÃO API E OBTENÇÃO DA LISTA DE RECEITAS
export const fetchRecipeDetailsAPIAction = (url) => async (dispatch) => {
  dispatch(requestApiAction());
  try {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
    dispatch(getRecipeDetailsAction(json));
  } catch (error) {
    console.log(error);
  }
};
