const URLDrink = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
const URLFood = 'https://www.themealdb.com/api/json/v1/1/random.php';
export const requestRandomDrinkRecipe = async () => {
  const APIfetch = await fetch(URLDrink);
  const APIjson = await APIfetch.json();
  return APIjson;
};

export const requestRandomFoodRecipe = async () => {
  const APIfetch = await fetch(URLFood);
  const APIjson = await APIfetch.json();
  return APIjson;
};
