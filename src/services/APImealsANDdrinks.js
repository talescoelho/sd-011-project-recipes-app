const APImealById = async (id) => {
  const URLmeals = `www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  const APIfetch = await fetch(URLmeals);
  const APIjson = await APIfetch.json();
  return APIjson;
};

export default APImealById;
