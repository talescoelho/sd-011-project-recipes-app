export const API_URL_DRINKS_BY_ID = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
export const API_URL_FOODS_BY_ID = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';

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
