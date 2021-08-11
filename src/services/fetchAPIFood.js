const urlIngredients = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
const urlName = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const urlCategory = 'https://www.themealdb.com/api/json/v1/1/list.php?c=';
const urlCategoryFilter = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';
const urlFirstLetter = 'https://www.themealdb.com/api/json/v1/1/search.php?f=';
const urlId = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
const urlFoodRandom = 'https://www.themealdb.com/api/json/v1/1/random.php';
const urlFoodArea = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
const urlIngredientsFilter = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=';
const urlSearchFoodByArea = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=';

export async function fetchAPIName(name) {
  try {
    const response = await fetch(`${urlName}${name}`);
    const resolve = await response.json();
    return resolve.meals;
  } catch (error) {
    return console.log(error);
  }
}

export async function fetchAPICategory(category) {
  try {
    const response = await fetch(`${urlCategory}${category}`);
    const resolve = await response.json();
    return resolve.meals;
  } catch (error) {
    return console.log(error);
  }
}

export async function fetchAPICategoryFilter(category) {
  try {
    const response = await fetch(`${urlCategoryFilter}${category}`);
    const resolve = await response.json();
    return resolve.meals;
  } catch (error) {
    return console.log(error);
  }
}

export async function fetchAPIByID(id) {
  try {
    const response = await fetch(`${urlId}${id}`);
    const resolve = await response.json();
    return resolve.meals;
  } catch (error) {
    return console.log(error);
  }
}

export async function fetchFoodRandom() {
  try {
    const response = await fetch(`${urlFoodRandom}`);
    const resolve = await response.json();
    return resolve.meals[0].idMeal;
  } catch (error) {
    return console.log(error);
  }
}

export async function fetchFoodIngredient() {
  try {
    const response = await fetch(`${urlIngredients}`);
    const resolve = await response.json();
    return resolve.meals;
  } catch (error) {
    return console.log(error);
  }
}

export async function fetchFoodArea() {
  try {
    const response = await fetch(`${urlFoodArea}`);
    const resolve = await response.json();
    return resolve.meals;
  } catch (error) {
    return console.log(error);
  }
}

export async function fetchAPIFirstLetter(letter) {
  try {
    const response = await fetch(`${urlFirstLetter}${letter}`);
    const resolve = await response.json();
    return resolve.meals;
  } catch (error) {
    return console.log(error);
  }
}

export async function fetchFoodIngredientSearch(ingredient) {
  try {
    const response = await fetch(`${urlIngredientsFilter}${ingredient}`);
    const resolve = await response.json();
    return resolve.meals;
  } catch (error) {
    return console.log(error);
  }
}

export async function fetchSearchFoodByArea(area) {
  try {
    const response = await fetch(`${urlSearchFoodByArea}${area}`);
    const resolve = await response.json();
    return resolve.meals;
  } catch (error) {
    return console.log(error);
  }
}
