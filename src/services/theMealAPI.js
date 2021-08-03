export function searchBarFetchMeal(search, type) {
  switch (type) {
  case 'ingredient':
    return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${search}`)
      .then((result) => result.json())
      .then(({ meals }) => meals);

  case 'name':
    return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then((result) => result.json())
      .then(({ meals }) => meals);

  case 'firstLetter':
    return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`)
      .then((result) => result.json())
      .then(({ meals }) => meals)
      .catch(() => 'Sua busca deve conter somente 1 (um) caracter');

  case 'foodId':
    return fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${search}`)
      .then((result) => result.json())
      .then(({ meals }) => meals);

  default:
    break;
  }
}

export const valor = 'teste';
