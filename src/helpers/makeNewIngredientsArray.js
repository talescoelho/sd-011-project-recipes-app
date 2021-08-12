export default function makeNewIngredientsArray(actualArray, original, ingredientToSwitch, type, id) {
  const INGREDIENTS = JSON.parse(localStorage.inProgressRecipes);
  const indexOfIngredient = actualArray.indexOf(original);
  actualArray[indexOfIngredient] = ingredientToSwitch;
  INGREDIENTS[type][id] = actualArray;
  return localStorage.setItem('inProgressRecipes', JSON.stringify(INGREDIENTS));
}
