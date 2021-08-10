const fetchByDrinkIngredient = async () => {
  const TWELVE = 12;
  const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
  const result = await response.json();
  const ingredients = result.drinks.slice(0, TWELVE);
  return ingredients;
};

export default fetchByDrinkIngredient;
