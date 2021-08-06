const fetchByMealIngredient = async () => {
  const TWELVE = 12;
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
  const result = await response.json();
  const ingredients = result.meals.slice(0, TWELVE);
  // console.log(ingredients);
  return ingredients;
};

export default fetchByMealIngredient;
