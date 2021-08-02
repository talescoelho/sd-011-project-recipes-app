// const urlIngredients = 'https://www.themealdb.com/api/json/v1/1/filter.php?i={ingrediente}';
const urlName = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
// const urlFirstLetter = 'https://www.themealdb.com/api/json/v1/1/search.php?f={primeira-letra}';

export default async function fetchAPI(name) {
  try {
    const response = await fetch(`${urlName}${name}`);
    const resolve = await response.json();
    return resolve.meals;
  } catch (error) {
    return console.log(error);
  }
}
