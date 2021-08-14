import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

export const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return render(ui, { wrapper: BrowserRouter });
};

export function handleDisable(cb, stateData, stateCounter) {
  const count = cb().map((key) => stateData.meals[0][key] !== ''
    && stateData.meals[0][key] !== null).filter((el) => el === true);
  if (stateCounter && stateCounter.length === count.length) return '';
  return '1';
}

const message = 'Sinto muito, não encontramos nenhuma receita para esses filtros.';

export function fetchIngredientesList(setIngredientesList) {
  // retorna API com a lista de ingredientes para comidas
  fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
    .then((response) => response.json())
    .then((jsonData) => setIngredientesList(jsonData.meals));
}

export function fetchIngredientesListDrink(setIngredientesList) {
  // retorna API com a lista de ingredientes para bebidas
  fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
    .then((response) => response.json())
    .then((jsonData) => setIngredientesList(jsonData.drinks));
}

export function fetchRandomMeal(setRandomMeal) {
  // retorna API randomica de comida contendo 1 resultado
  fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then((response) => response.json())
    .then((jsonData) => setRandomMeal(jsonData.meals[0]));
}

export function fetchRandomDrink(setRandomDrink) {
  // retorna API randomica de bebida contendo 1 resultado
  fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then((response) => response.json())
    .then((jsonData) => setRandomDrink(jsonData.drinks[0]));
}

export function fetchMealsAPI(setListMeals) {
  // essa API aceita o parametro s vaziu
  // retorna API de lista de comida
  fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
    .then((response) => response.json())
    .then((jsonData) => setListMeals(jsonData.meals));
}

export function fetchMealsCategorisAPI(setListMealsCategorie) {
  // retorna API de lista de categoria de comida
  fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
    .then((response) => response.json())
    .then((jsonData) => setListMealsCategorie(jsonData.meals));
}

export function fetchMealsForCategorie(setListMeals, categorie) {
  // retorna API de lista de comida pela categoria
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categorie}`)
    .then((response) => response.json())
    .then((jsonData) => setListMeals(jsonData.meals));
}

export function fetchCocktailsAPI(setListCocktails) {
  // retorna API de lista de bebidas
  fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
    .then((response) => response.json())
    .then((jsonData) => setListCocktails(jsonData.drinks));
}
export function fetchCocktailsCategorisAPI(setListCocktailsCategorie) {
  // retorna API de lista de categoria de bebidas
  fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
    .then((response) => response.json())
    .then((jsonData) => setListCocktailsCategorie(jsonData.drinks));
}

export function fetchCocktailsForCategorie(setListCocktail, categorie) {
  // retorna API de lista de bebidas pela categoria
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categorie}`)
    .then((response) => response.json())
    .then((jsonData) => {
      setListCocktail(jsonData.drinks);
    });
}

export const fetchFoodsIngredienteMeail = (ingrediente, setFoods) => {
  // retorna pesquisa por nome na pagina de comidas
  const api = fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingrediente}`);
  if (api) {
    api
      .then((resp) => resp.json())
      .then((jsonObj) => setFoods(jsonObj.meals));
  }
  alert(message);
};

export const fetchFoodsIngredienteDrink = (ingrediente, setFoods) => {
  // retorna pesquisa por nome na pagina de bebidas
  const api = fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingrediente}`);
  if (api) {
    api
      .then((resp) => resp.json())
      .then((jsonObj) => setFoods(jsonObj.drinks));
  }
  alert(message);
};

export const fetchFoodsName = (name, setFoods) => {
  // retorna pesquisa por nome na pagina de comidas
  const api = fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
  if (api) {
    api
      .then((resp) => resp.json())
      .then((jsonObj) => setFoods(jsonObj.meals));
  }
  alert(message);
};

export const fetchFoodsNameDrink = (name, setFoods) => {
  // retorna pesquisa por nome na pagina de bebidas
  const api = fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
  if (api) {
    api
      .then((resp) => resp.json())
      .then((jsonObj) => setFoods(jsonObj.drinks));
  }
  alert(message);
};

export const fetchFoodsFirstLetter = (firstLetter,
  setFoods) => (firstLetter.length === 1
// pesquisa pela primeira letra comida
  ? fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`)
    .then((resp) => resp.json())
    .then((jsonObj) => setFoods(jsonObj.meals))
  : alert('Sua busca deve conter somente 1 (um) caracter'));

export const fetchFoodsFirstLetterDrink = (firstLetter,
  setFoods) => (firstLetter.length === 1
// pesquisa pela primeira letra bebida
  ? fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${firstLetter}`)
    .then((resp) => resp.json())
    .then((jsonObj) => setFoods(jsonObj.drinks))
  : alert('Sua busca deve conter somente 1 (um) caracter'));

export async function requestDrinkById(id) {
  const request = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
  const resolve = await request.json();
  return resolve;
}

export async function requestMealById(id) {
  const request = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  const resolve = await request.json();
  return resolve;
}

export async function requestArea() {
  const request = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
  const resolve = await request.json();
  return resolve;
}

export async function requestDrink(name = '') {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  const grup = url + name;
  const request = await fetch(grup);
  const resolve = await request.json();
  return resolve;
}

async function requestByMeal(name = '') {
  const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const grup = url + name;
  const request = await fetch(grup);
  const resolve = await request.json();
  return resolve;
}

export default requestByMeal;
