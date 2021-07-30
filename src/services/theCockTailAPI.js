export function searchBarFetchCockTail(search, type) {
  switch (type) {
  case 'ingredient':
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${search}`)
      .then((result) => result.json())
      .then(({ drinks }) => drinks);

  case 'name':
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
      .then((result) => result.json())
      .then(({ drinks }) => drinks);

  case 'firstLetter':
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${search}`)
      .then((result) => result.json())
      .then(({ drinks }) => drinks)
      .catch(() => 'Sua busca deve conter somente 1 (um) caracter');

  default:
    break;
  }
}

export const valor = 'teste';
