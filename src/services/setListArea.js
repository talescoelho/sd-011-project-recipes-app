const setListArea = async () => {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
  const result = await response.json();
  console.log(result);
  const areas = result.meals;
  console.log(areas);
  return areas;
};

export default setListArea;
