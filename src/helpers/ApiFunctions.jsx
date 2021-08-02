export const handleFoods = async (radioButton, searchText, setDataFilter, setLoading) => {
  if (radioButton === 'ingrediente') {
    setLoading(true);
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchText}`);
    const { meals } = await response.json();
    console.log(meals);
    setLoading(false);
    return setDataFilter(meals);
  }

  if (radioButton === 'nome') {
    setLoading(true);
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`);
    const { meals } = await response.json();
    console.log(meals);
    setLoading(false);
    return setDataFilter(meals);
  }

  const fnAlert = (func, message) => {
    func(message);
  };

  if (radioButton === 'primeira letra' && searchText.length > 1) {
    const msg = ('Sua busca deve conter somente 1 (um) caracter');
    return fnAlert(alert, msg);
  }
  setLoading(true);
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchText}`);
  const { meals } = await response.json();
  console.log(meals);
  setLoading(false);
  return setDataFilter(meals);
};

export const handleDrinks = async (radioButton, searchText, setDataFilter,
  setLoading) => {
  if (radioButton === 'ingrediente') {
    setLoading(true);
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchText}`);
    const { drinks } = await response.json();
    console.log(drinks);
    setLoading(false);
    return setDataFilter(drinks);
  }

  if (radioButton === 'nome') {
    setLoading(true);
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`);
    const { drinks } = await response.json();
    console.log(drinks);
    setLoading(false);
    const Max = 12;
    return !drinks ? setDataFilter(drinks) : setDataFilter(drinks.slice(0, Max));
  }

  const fnAlert = (func, message) => {
    func(message);
  };

  if (radioButton === 'primeira letra' && searchText.length > 1) {
    const msg = ('Sua busca deve conter somente 1 (um) caracter');
    return fnAlert(alert, msg);
  }
  setLoading(true);
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${searchText}`);
  const { drinks } = await response.json();
  console.log(drinks);
  setLoading(false);
  return setDataFilter(drinks);
};
