export const REQUEST_API = 'REQUEST_API';
export const GET_RECIPES_API = 'GET_RECIPES_API';

// ESTÁ ACTION ALTERA isLoading
export const requestApiAction = () => ({ type: REQUEST_API });

// https://www.themealdb.com/api/json/v1/1/filter.php?i={ingrediente};
// https://www.themealdb.com/api/json/v1/1/search.php?s={nome};
// https://www.themealdb.com/api/json/v1/1/search.php?f={primeira-letra};

// const n = 'nome'

// console.log(`https://www.themealdb.com/api/json/v1/1/filter.php?${n === 'ingrediente'? 'i' : ''}${n === 'nome'? 's' : ''}${n === 'primeira-letra'? 'f' : ''}={n}`)
