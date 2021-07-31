export const RECEIVED_RECIPES_DRINKS = 'RECEIVED_RECIPES_DRINKS';
export const REQUEST_RECEIVED = 'REQUEST_RECEIVED';

const receiveRecipes = (allRecipes) => ({
  type: RECEIVED_RECIPES_DRINKS,
  allRecipes,
});

const requestRecipes = () => ({
  type: REQUEST_RECEIVED,
});

export function fetchReceiveRecipes(textInputValue, radioInputValue) {
  return (dispatch) => {
    dispatch(requestRecipes());
    let url = '';
    const message = 'Sinto muito, não encontramos nenhuma receita para esses filtros.';
    switch (radioInputValue) {
    case 'ingrediente':
      url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${textInputValue}`;
      break;
    case 'nome':
      url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${textInputValue}`;
      break;
    case 'primeira-letra':
      if (textInputValue.length > 1) {
        return alert('Sua busca deve conter somente 1 (um) caracter');
      }
      url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${textInputValue}`;
      break;
    default:
    }
    return fetch(url)
      .then((response) => response.json())
      .then((recipes) => {
        if (recipes.drinks === null) {
          return alert(message);
        }
        return dispatch(receiveRecipes(recipes));
      });
  };
}
