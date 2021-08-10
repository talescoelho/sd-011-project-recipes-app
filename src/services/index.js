const maxCount = 12;

export const fetchApiMeals = async (url, search) => {
  const response = await fetch(`${url}${search}`);
  const results = await response.json();
  const { meals } = await (response.ok ? Promise.resolve(results)
    : Promise.reject(results));
  if (meals === null) {
    alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
  }
  return meals.slice(0, maxCount);
};

export const fetchApiDrinks = async (url, search) => {
  const response = await fetch(`${url}${search}`);
  const results = await response.json();
  const { drinks } = await (response.ok ? Promise.resolve(results)
    : Promise.reject(results));
  if (drinks === null) {
    alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
  }
  return drinks.slice(0, maxCount);
};

export async function fetchDefaultFoodsFromMealsDB() {
  try {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    const rawResults = await response.json();
    const results = rawResults.meals;
    return results.slice(0, maxCount);
  } catch (error) {
    console.log(error);
  }
}

export async function fetchDefaultDrinksFromCocktailsDB() {
  try {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
    const rawResults = await response.json();
    const results = rawResults.drinks;
    return results.slice(0, maxCount);
  } catch (error) {
    console.log(error);
  }
}

export async function fetchCategoriesFromMealsDB() {
  try {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
    const rawResults = await response.json();
    const results = rawResults.meals;
    return results;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchCategoriesFromCocktailsDB() {
  try {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
    const rawResults = await response.json();
    const results = rawResults.drinks;
    return results;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchMealsByCategoryFromMealsDB(category) {
  try {
    const response = await
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
    const rawResults = await response.json();
    const results = rawResults.meals;
    return results.slice(0, maxCount);
  } catch (error) {
    console.log(error);
  }
}

export async function fetchDrinksByCategoryFromCocktailsDB(category) {
  try {
    const response = await
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`);
    const rawResults = await response.json();
    const results = rawResults.drinks;
    return results.slice(0, maxCount);
  } catch (error) {
    console.log(error);
  }
}

export async function fetchIngredientsFromMealsDB() {
  const ingredientsMaxCount = 12;
  try {
    const response = await
    fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
    const data = await response.json();
    return data.meals.slice(0, ingredientsMaxCount);
  } catch (err) {
    console.log(err);
  }
}

export async function fetchIngredientsFromCocktailsDB() {
  const ingredientsMaxCount = 12;
  try {
    const response = await
    fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
    const data = await response.json();
    return data.drinks.slice(0, ingredientsMaxCount);
  } catch (err) {
    console.log(err);
  }
}

export async function fetchMealDetailsFromMealsDB(mealsId) {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealsId}`);
  const rawResults = await response.json();
  const results = rawResults.meals;
  return results;
}

export async function fetchRecommendedBeveragesFromCocktailsDB() {
  const numberOfRecomendations = 6;
  const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
  const rawResults = await response.json();
  const results = rawResults.drinks;
  return (results.slice(0, numberOfRecomendations));
}

export async function fetchDrinkDetailsFromCocktailsDB(drinksId) {
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinksId}`);
  const rawResults = await response.json();
  const results = rawResults.drinks;
  return results;
}

export async function fetchRecommendedMealsFromMealsDB() {
  const numberOfRecomendations = 6;
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
  const rawResults = await response.json();
  const results = rawResults.meals;
  return (results.slice(0, numberOfRecomendations));
}

export async function fetchMealsByIngredient(ingredient) {
  try {
    const response = await
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals.slice(0, maxCount);
  } catch (err) {
    console.log(err);
  }
}

export async function fetchDrinksByIngredient(ingredient) {
  try {
    const response = await
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.drinks.slice(0, maxCount);
  } catch (err) {
    console.log(err);
  }
}

export async function fetchMealsListByArea() {
  try {
    const response = await
    fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
    const data = await response.json();
    return data.meals;
  } catch (err) {
    console.log(err);
  }
}

export async function fetchMealsByArea(area) {
  try {
    const response = await
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
    const data = await response.json();
    return data.meals;
  } catch (err) {
    console.log(err);
  }
}
