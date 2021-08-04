const fetchIngredients = async (ingredient) => {
  const URL_INGREDIENT = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
  const results = await fetch(URL_INGREDIENT).then((data) => data.json());
  return results;
};

export default fetchIngredients;
