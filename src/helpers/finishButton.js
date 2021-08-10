export function handleSaveMealRecipeInLocalStorage(dataToManipulate, mealsId) {
  const { strArea, strMealThumb, strMeal, strCategory,
    strTags } = dataToManipulate;
  const doneRecipesLocal = [];
  const [month, date, year] = new Date().toLocaleDateString('pt-BR').split('/');
  const doneRecipe = {
    id: mealsId,
    type: 'comida',
    area: strArea,
    category: strCategory,
    alcoholicOrNot: '',
    name: strMeal,
    image: strMealThumb,
    doneDate: `${date}/${month}/${year}`,
    tags: [strTags],
  };

  const getDoneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
  if (getDoneRecipes !== null) {
    getDoneRecipes.push(doneRecipe);
    localStorage.setItem('doneRecipes', JSON.stringify(getDoneRecipes));
  } else {
    doneRecipesLocal.push(doneRecipe);
    localStorage.setItem('doneRecipes', JSON.stringify(doneRecipesLocal));
  }
}

export function handleSaveDrinkRecipeInLocalStorage(dataToManipulate, drinkId) {
  const { strAlcoholic, strDrinkThumb, strDrink, strCategory,
    strTags } = dataToManipulate;
  const doneRecipesLocal = [];
  const [month, date, year] = new Date().toLocaleDateString('pt-BR').split('/');
  const doneRecipe = {
    id: drinkId,
    type: 'bebida',
    area: '',
    category: strCategory,
    alcoholicOrNot: strAlcoholic,
    name: strDrink,
    image: strDrinkThumb,
    doneDate: `${date}/${month}/${year}`,
    tags: [strTags],
  };

  const getDoneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
  if (getDoneRecipes !== null) {
    getDoneRecipes.push(doneRecipe);
    localStorage.setItem('doneRecipes', JSON.stringify(getDoneRecipes));
  } else {
    doneRecipesLocal.push(doneRecipe);
    localStorage.setItem('doneRecipes', JSON.stringify(doneRecipesLocal));
  }
}
