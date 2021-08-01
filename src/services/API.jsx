export async function fetchAPISearchBarComidas(searchInput, option) {
  if (option === 'ingredient') {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInput}`);
    const data = await response.json();
    return data.meals;
  }

  if (option === 'name') {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`);
    const data = await response.json();
    return data.meals;
  }

  if (option === 'firstLetter') {
    if (searchInput.length > 1) {
      alert('Sua busca deve conter somente 1 (um) caracter');
    }
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchInput}`);
    const data = await response.json();
    return data;
  }
}

export async function fetchAPISearchBarBebidas(searchInput, option) {
  if (option === 'ingredient') {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchInput}`);
    const data = await response.json();
    return data.drinks;
  }

  if (option === 'name') {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchInput}`);
    const data = await response.json();
    return data.drinks;
  }

  if (option === 'firstLetter') {
    if (searchInput.length > 1) {
      alert('Sua busca deve conter somente 1 (um) caracter');
    }
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${searchInput}`);
    const data = await response.json();
    return data;
  }
}
