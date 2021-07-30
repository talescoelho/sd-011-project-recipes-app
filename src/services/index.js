// FETCH PAGINA DE COMIDAS

export async function fetchFoodCategories() {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
  const { meals } = await response.json();
  return meals;
}

// FETCH PAGINA DE EXPLORAR COMIDAS

export async function fetchExploreFoodsArea() {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
  const { meals } = await response.json();
  return meals;
}

ingredientes: https://www.themealdb.com/api/json/v1/1/list.php?i=list


foto: https://www.themealdb.com/images/ingredients/{nome-do-ingrediente}.png

// FETCH PAGINA DE BEBIDAS

categorias: https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list

// FETCH PAGINA DE EXPLORAR BEBIDAS

areas: https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list
ingredientes: https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list
foto: https://www.thecocktaildb.com/images/ingredients/{nome-do-ingrediente}.png

// SEARCHBAR FOODAPI

export async function fetchFoodIngredient(ingrediente) {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingrediente}`);
  const { meals } = await response.json();
  return meals;
}

export async function fetchFoodName(nome) {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${nome}`);
  const { meals } = await response.json();
  return meals;
}

export async function fetchFoodLetter(primeiraLetra) {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${primeiraLetra}`);
  const { meals } = await response.json();
  return meals;
}

// SEARCHBAR COCKTAILSAPI

export async function fetchCocktailsIngredient(ingrediente) {
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingrediente}`);
  const { drinks } = await response.json();
  return drinks;
}

export async function fetchCocktailsName(nome) {
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nome}`);
  const { drinks } = await response.json();
  return drinks;
}

export async function fetchCocktailsLetter(primeiraLetra) {
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${primeiraLetra}`);
  const { drinks } = await response.json();
  return drinks;
}
