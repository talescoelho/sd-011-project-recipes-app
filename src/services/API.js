const error = 'Sinto muito, não encontramos nenhuma receita para esses filtros.';

function getRecipesFromAPI(url, callback) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => callback(data))
    .catch(() => alert(error));
}

function getRecipesFromTheMealAPI(term, type, callback) {
  const API_THEMEALDB_INGREDIENT = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=';
  const API_THEMEALDB_NAME = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const API_THEMEALDB_FIRST_LETTER = 'https://www.themealdb.com/api/json/v1/1/search.php?f=';
  const termSearch = `${term}`;
  let url = '';
  switch (type) {
  case 'i':
    url = API_THEMEALDB_INGREDIENT + termSearch;
    getRecipesFromAPI(url, callback);
    break;
  case 's':
    url = API_THEMEALDB_NAME + termSearch;
    getRecipesFromAPI(url, callback);
    break;
  case 'f':
    url = API_THEMEALDB_FIRST_LETTER + termSearch;
    getRecipesFromAPI(url, callback);
    break;
  default:
    break;
  }
}

function getRecipesfromTheCockTailAPI(term, type, callback) {
  const API_THECOCKTAILDB_INGREDIENT = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=';
  const API_THECOCKTAILDB_NAME = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  const API_THECOCKTAILDB__FIRST_LETTER = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f='
  const termSearch = `${term}`;
  let url = '';
  switch (type) {
  case 'i':
    url = API_THECOCKTAILDB_INGREDIENT + termSearch;
    getRecipesFromAPI(url, callback);
    break;
  case 's':
    url = API_THECOCKTAILDB_NAME + termSearch;
    getRecipesFromAPI(url, callback);
    break;
  case 'f':
    url = API_THECOCKTAILDB__FIRST_LETTER + termSearch;
    getRecipesFromAPI(url, callback);
    break;
  default:
    break;
  }
}

export default function getRecipes(term, type, path, callback) {
  if (path === '/comidas') {
    getRecipesFromTheMealAPI(term, type, callback);
  } else if (path === '/bebidas') {
    getRecipesfromTheCockTailAPI(term, type, callback);
  }
}

export function getDetailsRecipesFromTheMealAPI(id) {
  const API_THEMEALDB_DETAILS = 'www.themealdb.com/api/json/v1/1/lookup.php?i=';
  const urlDetailMeal = API_THEMEALDB_DETAILS + id;
  getRecipesFromAPI(urlDetailMeal);
}

export function getDetailsRecipesFromTheCockTailAPI(id) {
  const API_THECOCKTAILDB_DETAILS = 'www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
  const urlDetailCockTail = API_THECOCKTAILDB_DETAILS + id;
  getRecipesFromAPI(urlDetailCockTail);
}
