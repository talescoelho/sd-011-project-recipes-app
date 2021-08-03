export async function fetchDefaultFoodsFromMealsDB() {
  try {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    const rawResults = await response.json();
    const results = rawResults.meals;
    return results;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchDefaultDrinksFromCocktailsDB() {
  try {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
    const rawResults = await response.json();
    const results = rawResults.drinks;
    return results;
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
    return results;
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
    return results;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchIngredientsFromMealsDB() {
  try {
    const response = await
    fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
    const data = await response.json();
    return data.meals;
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
