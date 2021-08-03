const fetchSurprise = async (food) => {
  const URL_DRINK = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
  const URL_FOOD = 'https://www.themealdb.com/api/json/v1/1/random.php';

  const types = {
    meals: URL_FOOD,
    drinks: URL_DRINK,
  };

  const response = await fetch(types[food]);
  const json = await response.json();

  return json[food];
};

export default fetchSurprise;
