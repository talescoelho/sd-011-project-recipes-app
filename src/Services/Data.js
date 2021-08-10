export function fetchMealsAPI(setListMeals) {
  // essa API aceita o parametro s vaziu
  // retorna API de lista de comida
  fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
    .then((response) => response.json())
    .then((jsonData) => setListMeals(jsonData.meals));
}

export function fetchMealsCategorisAPI(setListMealsCategorie) {
  // retorna API de lista de categoria de comida
  fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
    .then((response) => response.json())
    .then((jsonData) => setListMealsCategorie(jsonData.meals));
}

export function fetchMealsForCategorie(setListMeals, categorie) {
  // retorna API de lista de comida pela categoria
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categorie}`)
    .then((response) => response.json())
    .then((jsonData) => setListMeals(jsonData.meals));
}

export function fetchCocktailsAPI(setListCocktails) {
  // retorna API de lista de bebidas
  fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
    .then((response) => response.json())
    .then((jsonData) => setListCocktails(jsonData.drinks));
}
export function fetchCocktailsCategorisAPI(setListCocktailsCategorie) {
  // retorna API de lista de categoria de bebidas
  fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
    .then((response) => response.json())
    .then((jsonData) => setListCocktailsCategorie(jsonData.drinks));
}

export function fetchCocktailsForCategorie(setListCocktail, categorie) {
  // retorna API de lista de bebidas pela categoria
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categorie}`)
    .then((response) => response.json())
    .then((jsonData) => {
      setListCocktail(jsonData.drinks);
    });
}

export function fetchFoodsIngredienteMeail(ingrediente, setFoods) {
  // retorna pesquisa por ingrediente na pagina de comidas
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingrediente}`)
    .then((response) => response.json())
    .then((jsonData) => setFoods(jsonData.meals));
}

export function fetchFoodsIngredienteDrink(ingrediente, setFoods) {
  // retorna pesquisa por ingrediente na pagina de Bebidas
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingrediente}`)
    .then((response) => response.json())
    .then((jsonData) => setFoods(jsonData.drinks));
}

export function fetchFoodsName(name, setFoods) {
  // retorna pesquisa por nome na pagina de comidas
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
    .then((resp) => resp.json())
    .then((jsonObj) => setFoods(jsonObj.meals));
}

export function fetchFoodsNameDrink(name, setFoods) {
  // retorna pesquisa por nome na pagina de bebidas
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
    .then((resp) => resp.json())
    .then((jsonObj) => setFoods(jsonObj.drinks));
}

export const fetchFoodsFirstLetter = (firstLetter,
  setFoods) => (firstLetter.length === 1
// pesquisa pela primeira letra comida
  ? fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`)
    .then((resp) => resp.json())
    .then((jsonObj) => setFoods(jsonObj.meals))
  : alert('Sua busca deve conter somente 1 (um) caracter'));

export const fetchFoodsFirstLetterDrink = (firstLetter,
  setFoods) => (firstLetter.length === 1
// pesquisa pela primeira letra bebida
  ? fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${firstLetter}`)
    .then((resp) => resp.json())
    .then((jsonObj) => setFoods(jsonObj.drinks))
  : alert('Sua busca deve conter somente 1 (um) caracter'));
