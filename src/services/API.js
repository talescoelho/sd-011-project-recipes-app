const error = 'Sinto muito, não encontramos nenhuma receita para esses filtros.';

function checkResponseMeal(data, callback) {
  const response = data.meals;
  if (response === null) {
    return alert(error);
  }
  callback(data);
}

function getRecipesFromMealAPI(url, callback) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => checkResponseMeal(data, callback));
}

function checkResponseCockTail(data, callback) {
  const response = data.drinks;
  if (response === null) {
    return alert(error);
  }
  callback(data);
}

function getRecipesFromCocktailAPI(url, callback) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => checkResponseCockTail(data, callback));
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
    getRecipesFromMealAPI(url, callback);
    break;
  case 's':
    url = API_THEMEALDB_NAME + termSearch;
    getRecipesFromMealAPI(url, callback);
    break;
  case 'f':
    url = API_THEMEALDB_FIRST_LETTER + termSearch;
    getRecipesFromMealAPI(url, callback);
    break;
  default:
    break;
  }
}

function getRecipesfromTheCockTailAPI(term, type, callback) {
  const API_THECOCKTAILDB_INGREDIENT = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=';
  const API_THECOCKTAILDB_NAME = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  const API_THECOCKTAILDB__FIRST_LETTER = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=';
  const termSearch = `${term}`;
  let url = '';
  switch (type) {
  case 'i':
    url = API_THECOCKTAILDB_INGREDIENT + termSearch;
    getRecipesFromCocktailAPI(url, callback);
    break;
  case 's':
    url = API_THECOCKTAILDB_NAME + termSearch;
    getRecipesFromCocktailAPI(url, callback);
    break;
  case 'f':
    url = API_THECOCKTAILDB__FIRST_LETTER + termSearch;
    getRecipesFromCocktailAPI(url, callback);
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
  getRecipesFromMealAPI(urlDetailMeal);
}

export function getDetailsRecipesFromTheCockTailAPI(id) {
  const API_THECOCKTAILDB_DETAILS = 'www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
  const urlDetailCockTail = API_THECOCKTAILDB_DETAILS + id;
  getRecipesFromCocktailAPI(urlDetailCockTail);
}

export function getCategoriesFromApi(path, callback) {
  const API_THEMEALDB_CATEGORIES = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
  const API_THECOCKTAILDB_CATEGORIES = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
  if (path === '/comidas') {
    fetch(API_THEMEALDB_CATEGORIES)
      .then((response) => response.json())
      .then((data) => callback(data.meals));
  } else if (path === '/bebidas') {
    fetch(API_THECOCKTAILDB_CATEGORIES)
      .then((response) => response.json())
      .then((data) => callback(data.drinks));
  }
}
