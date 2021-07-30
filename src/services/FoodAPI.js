// eslint-disable-next-line import/prefer-default-export
export const fetchFood = async (id) => {
  const URL = `www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  // const URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=potato';
  const response = await fetch(URL);
  console.log(response);
  // const json = await response.json();
  // return json;

  // try {
  //   return results;
  // } catch (error) {
  //   return error;
  // }
};
