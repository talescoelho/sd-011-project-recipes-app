const fetchFoodOrigin = async (food) => {
  const URL_FOOD = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
  // const URL_DRINK = ?

  const types = {
    meals: URL_FOOD,
    // drink: URL_DRINK,
  };

  const response = await fetch(types[food]);
  const json = await response.json();

  return json[food];
};

export default fetchFoodOrigin;
