export const fetchApiMeals = async (url, search) => {
  const resultMeals = await fetch(`${url}${search}`)
    .then((response) => response.json())
    .then(({ meals }) => meals)
    .catch((erro) => console.log(erro));

  return resultMeals;
};

export const fetchApiDrinks = async (url, search) => {
  const resultDrinks = await fetch(`${url}${search}`)
    .then((response) => response.json())
    .then(({ drinks }) => drinks)
    .catch((erro) => console.log(erro));

  return resultDrinks;
};
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
