export const RECEIVED_RECIPES_FOOD = 'RECEIVED_RECIPES_FOOD';
export const REQUEST_RECEIVED = 'REQUEST_RECEIVED';

const receiveRecipes = (allRecipes) => ({
  type: RECEIVED_RECIPES_FOOD,
  allRecipes,
});

const requestRecipes = () => ({
  type: REQUEST_RECEIVED,
});

export function fetchReceiveRecipes(textInputValue, radioInputValue) {
  return (dispatch) => {
    dispatch(requestRecipes());
    let url = '';
    console.log(textInputValue);
    console.log(textInputValue);
    switch (radioInputValue) {
    case 'ingrediente':
      url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${textInputValue}`;
      break;
    case 'nome':
      url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${textInputValue}`;
      break;
    case 'primeira-letra':
      if (textInputValue.length > 1) {
        return alert('Sua busca deve conter somente 1 (um) caracter');
      }
      url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${textInputValue}`;
      break;
    default:
    }
    console.log(url);
    return fetch(url)
      .then((response) => response.json())
      .then((recipes) => dispatch(receiveRecipes(recipes)));
  };
}
