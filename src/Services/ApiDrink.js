export const getDrinkByIngredients = (input) => fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${input}`)
  .then((response) => (
    response
      .json()
      .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
  ));

export const getDrinkByName = (input) => fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`)
  .then((result) => (
    result
      .json()
      .then((json) => (result.ok ? Promise.resolve(json) : Promise.reject(json)))
  ));

export const getDrinkByFirstLetter = (input) => fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${input}`)
  .then((results) => (
    results
      .json()
      .then((json) => (results.ok ? Promise.resolve(json) : Promise.reject(json)))
  ));

export const getDrinksInitial = () => fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
  .then((initial) => (
    initial
      .json()
      .then((json) => (initial.ok ? Promise.resolve(json) : Promise.reject(json)))
  ));

export const getDrinksCategory = () => fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
  .then((categories) => (
    categories
      .json()
      .then((json) => (categories.ok ? Promise.resolve(json) : Promise.reject(json)))
  ));
