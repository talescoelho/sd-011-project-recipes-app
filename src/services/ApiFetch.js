const FetchApi = async (trigger, radioOption, inputValue, list) => {
  // https://www.themealdb.com/api/json/v1/1/lookup.php?i=52965
  let url = '';
  if (radioOption === 'ingrediente') {
    url = `filter.php?i=${inputValue}`;
  }
  if (radioOption === 'nome') {
    url = `search.php?s=${inputValue}`;
  }
  if (radioOption === 'primeiraLetra') {
    url = `search.php?f=${inputValue}`;
  }
  if (list === 'list') {
    url = 'list.php?c=list';
  }
  if (Array.isArray(list)) {
    const catName = list[0];
    const details = list[0];
    url = `filter.php?c=${catName}`;
    if (details === 'details') {
      url = `lookup.php?i=${list[1]}`;
    }
  }
  try {
    const feth = await fetch(`https://www.${trigger}.com/api/json/v1/1/${url}`);
    const feth2 = await feth.json();
    // console.log(feth2[mealOrDrink]);
    return feth2;
  } catch (error) {
    return error.message;
  }
};

export default FetchApi;
