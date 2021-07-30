export function searchBarFetchMeal(search, type) {
  switch (type) {
  case 'ingredient':
    return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${search}`)
      .then((result) => result.json())
      .then((resolve) => resolve);

  case 'name':
    return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then((result) => result.json())
      .then((resolve) => resolve);

  case 'firstLetter':
    return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`)
      .then((result) => result.json())
      .then((resolve) => resolve)
      .catch((error) => error);

  default:
    break;
  }
}

export const valor = 'teste';
