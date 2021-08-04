// const urlIngredients = 'https://www.themealdb.com/api/json/v1/1/filter.php?i={ingrediente}';
const urlName = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const urlCategory = 'https://www.themealdb.com/api/json/v1/1/list.php?c=';
const urlCategoryFilter = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';
// const urlFirstLetter = 'https://www.themealdb.com/api/json/v1/1/search.php?f={primeira-letra}';

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
