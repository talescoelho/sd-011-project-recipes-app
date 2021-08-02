// FETCH PAGINA DE COMIDAS
const alertString = 'Sinto muito, não encontramos nenhuma receita para esses filtros.';

export async function fetchFoodCategories() {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
  const { meals } = await response.json();
  if (!meals) {
    alert(alertString);
  }
  return meals;
}

// FETCH PAGINA DE EXPLORAR COMIDAS

export async function fetchExploreFoodsArea() {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
  const { meals } = await response.json();
  if (!meals) {
    alert(alertString);
  }
  return meals;
}

export async function fetchExploreFoodsIngredients() {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
  const { meals } = await response.json();
  if (!meals) {
    alert(alertString);
  }
  return meals;
}

// FETCH PAGINA DE DETALHES PELO ID E DETALHES DA COMIDA
export async function fetchFoodsById(id) {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  const { meals } = await response.json();
  if (!meals) {
    alert(alertString);
  }
  return meals;
}

// FETCH PAGINA DE BEBIDAS

export async function fetchCocktailsCategories() {
  const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
  const { drinks } = await response.json();
  if (!drinks) {
    alert(alertString);
  }
  return drinks;
}

// FETCH PAGINA DE EXPLORAR BEBIDAS
export async function fetchExploreCocktailsArea() {
  const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list');
  const { drinks } = await response.json();
  if (!drinks) {
    alert(alertString);
  }
  return drinks;
}

export async function fetchExploreCocktailsIngredients() {
  const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
  const { drinks } = await response.json();
  if (!drinks) {
    alert(alertString);
  }
  return drinks;
}

// SEARCHBAR FOODAPI

export async function fetchFoodIngredient(ingrediente) {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingrediente}`);
  const { meals } = await response.json();
  if (!meals) {
    alert(alertString);
  }
  return meals;
}

export async function fetchFoodName(nome) {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${nome}`);
  const { meals } = await response.json();
  if (!meals) {
    alert(alertString);
  }
  return meals;
}

export async function fetchFoodLetter(primeiraLetra) {
  const magicNUmber = 1;
  if (primeiraLetra.length > magicNUmber) {
    // eslint-disable-next-line no-alert
    alert('Sua busca deve conter somente 1 (um) caracter');
    return [];
  }
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${primeiraLetra}`);
  const { meals } = await response.json();
  if (!meals) {
    alert(alertString);
  }
  return meals;
}

// SEARCHBAR COCKTAILSAPI

export async function fetchCocktailsIngredient(ingrediente) {
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingrediente}`);
  const { drinks } = await response.json();
  if (!drinks) {
    alert(alertString);
  }
  return drinks;
}

export async function fetchCocktailsName(nome) {
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nome}`);
  const { drinks } = await response.json();
  if (!drinks) {
    alert(alertString);
  }
  return drinks;
}

export async function fetchCocktailsLetter(primeiraLetra) {
  const magicNUmber = 1;
  if (primeiraLetra.length > magicNUmber) {
    // eslint-disable-next-line no-alert
    alert('Sua busca deve conter somente 1 (um) caracter');
    return [];
  }
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${primeiraLetra}`);
  const { drinks } = await response.json();
  if (!drinks) {
    alert(alertString);
  }
  return drinks;
}

// FETCH PAGINA DE DETALHES PELO ID E DETALHES DAS BEBIDAS
export async function fetchDrinksById(id) {
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
  const { drinks } = await response.json();
  if (!drinks) {
    alert(alertString);
  }
  return drinks;
}

export const Foods = {
  categories: fetchFoodCategories(),
  area: fetchExploreFoodsArea(),
  ingredients: fetchExploreFoodsIngredients(),
  searchIngredients: (ingredient) => fetchFoodIngredient(ingredient),
  searchName: (name) => fetchFoodName(name),
  searchLetter: (letter) => fetchFoodLetter(letter),
  getById: (id) => fetchFoodsById(id),
};

export const Cocktails = {
  categories: fetchCocktailsCategories(),
  ingredients: fetchExploreCocktailsIngredients(),
  searchIngredients: (ingredient) => fetchCocktailsIngredient(ingredient),
  searchName: (name) => fetchCocktailsName(name),
  searchLetter: (letter) => fetchCocktailsLetter(letter),
  getById: (id) => fetchDrinksById(id),
};
