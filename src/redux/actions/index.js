export const REQUEST_API = 'REQUEST_API';
export const GET_RECIPES_API = 'GET_RECIPES_API';

// ESTÁ ACTION ALTERA isLoading PARA true
export const requestApiAction = () => ({ type: REQUEST_API });

// ESTÁ ACTION ALTERA isLoading PARA false E SALVA O RETORNO DA API EM recipesData
export const getRecipesAction = (data) => ({ type: GET_RECIPES_API, data });

// ESTÁ ACTION CRIA O AMBIENTE THUNK PARA REQUISIÇÃO API E OBTENÇÃO DA LISTA DE RECEITAS
export const fetchRecipesAPIAction = (url, recipeType) => async (dispatch) => {
  dispatch(requestApiAction());
  try {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
    if (!json[recipeType]) {
      alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
    }
    dispatch(getRecipesAction(json));
  } catch (error) {
    console.log(error);
  }
};
