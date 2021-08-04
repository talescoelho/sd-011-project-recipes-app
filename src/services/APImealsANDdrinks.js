const URLmeals = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

const APImeals = async () => {
  const APIfetch = await fetch(URLmeals);
  const APIjson = await APIfetch.json();
  return APIjson;
};

export default APImeals;
