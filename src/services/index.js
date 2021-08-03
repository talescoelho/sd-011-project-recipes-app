export const fetchApiMeals = async (url, search) => {
  const resultMeals = await fetch(`${url}${search}`)
    .then((response) => response.json())
    .then(({ meals }) => {
      if (meals) {
        return meals;
      }
      alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
    })
    .catch((error) => console.log(error));

  return resultMeals;
};

export const fetchApiDrinks = async (url, search) => {
  const resultDrinks = await fetch(`${url}${search}`)
    .then((response) => response.json())
    .then(({ drinks }) => {
      if (drinks) {
        return drinks;
      }
      alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
    })
    .catch((error) => console.log(error));

  return resultDrinks;
};
export async function fetchDefaultFoodsFromMealsDB() {
  const recipeMaxCount = 12;
  try {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    const rawResults = await response.json();
    const results = rawResults.meals;
    return results.slice(0, recipeMaxCount);
  } catch (error) {
    console.log(error);
  }
}

export async function fetchDefaultDrinksFromCocktailsDB() {
  const drinksMaxCount = 12;
  try {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
    const rawResults = await response.json();
    const results = rawResults.drinks;
    return results.slice(0, drinksMaxCount);
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
