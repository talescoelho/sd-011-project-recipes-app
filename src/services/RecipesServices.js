export const API_URL_DRINKS_BY_ID = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
export const API_URL_FOODS_BY_ID = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
export const API_URL_RANDOM_FOODS = 'https://www.themealdb.com/api/json/v1/1/random.php';
export const API_URL_RANDOM_DRINKS = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

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

export async function getRandomFood() {
  const request = await fetch(`${API_URL_RANDOM_FOODS}`);
  const response = await request.json();
  const { meals } = response;
  return meals[0].idMeal;
}

export async function getRandomDrink() {
  const request = await fetch(`${API_URL_RANDOM_DRINKS}`);
  const response = await request.json();
  const { drinks } = response;
  return drinks[0].idDrink;
}
