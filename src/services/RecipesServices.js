export const API_URL_DRINKS_BY_ID = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
export const API_URL_FOODS_BY_ID = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
export const API_URL_ALL_DRINKS = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
export const API_URL_ALL_FOODS = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

export async function getDrinkById(id) {
  const request = await fetch(`${API_URL_DRINKS_BY_ID}${id}`);
  const response = await request.json();
  const { drinks } = response;
  return drinks;
}

export async function getFoodById(id) {
  const request = await fetch(`${API_URL_FOODS_BY_ID}${id}`);
  const response = await request.json();
  const { meals } = response;
  return meals;
}

export async function getAllDrinks() {
  const request = await fetch(API_URL_ALL_DRINKS);
  const response = await request.json();
  const { drinks } = response;
  return drinks;
}

export async function getAllFoods() {
  const request = await fetch(API_URL_ALL_FOODS);
  const response = await request.json();
  const { drinks } = response;
  return drinks;
}
