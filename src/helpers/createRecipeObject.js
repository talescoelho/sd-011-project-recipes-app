import identifyRecipeType from './identifyRecipeType';

function createRecipeObject(foods, drinks) {
  const recipeType = identifyRecipeType();
  let recipeObject = {};
  if (recipeType === 'comidas') {
    recipeObject = {
      linkToGo: 'comidas',
      recipes: foods,
      type: 'meals',
      id: 'idMeal',
      name: 'strMeal',
      image: 'strMealThumb',
    };
  } else {
    recipeObject = {
      linkToGo: 'bebidas',
      recipes: drinks,
      type: 'drinks',
      id: 'idDrink',
      name: 'strDrink',
      image: 'strDrinkThumb',
    };
  }
  return recipeObject;
}

export default createRecipeObject;
