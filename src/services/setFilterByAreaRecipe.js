const setFilterByAreaRecipe = async () => {
  const TWELVE = 12;
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian');
  const result = await response.json();
  console.log(result);
  const recipes = result.meals.slice(0, TWELVE);
  console.log(recipes);
  return recipes;
};

export default setFilterByAreaRecipe;
