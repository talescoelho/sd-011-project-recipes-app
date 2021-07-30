export async function getCategories() {
  const categories = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?c=list`);
  const result = await categories.json();
  return result.meals;
}

export async function getAreas() {
  const areas = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
  const result = await areas.json();
  return result.meals;
}

export async function getIngredients() {
  const ingredients = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
  const result = await ingredients.json();
  return result.meals;
}

export async function searchByIngredient(ingredient) {
  const ingredients = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  const result = await ingredients.json();
  
  return result.meals;
}

export async function searchByFirstLetter(letter) {
  const ingredients = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`);
  const result = await ingredients.json();
  return result.meals;
}

export async function searchByArea(area) {
  const ingredients = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
  const result = await ingredients.json();
  return result.meals;
}

export async function searchById(id) {
  const ingredients = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  const result = await ingredients.json();
  return result.meals;
}

export async function serachImage(ingredientImage) {
  const ingredients = await fetch(`https://www.themealdb.com/images/ingredients/${ingredientImage}.png`);
  const result = await ingredients.url;
  return result;
}

export async function searchRandonMeal() {
  const randomMeal = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`);
  const result = await randomMeal.json();
  return result.meals[0];
}
