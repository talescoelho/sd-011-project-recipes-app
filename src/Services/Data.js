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
