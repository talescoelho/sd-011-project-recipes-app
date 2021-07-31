export const handleFoods = async (radioButton, searchText, setDataFilter) => {
  if (radioButton === 'ingrediente') {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchText}`);
    const { meals } = await response.json();
    console.log(meals);
    return setDataFilter(meals);
  }

  if (radioButton === 'nome') {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`);
    const { meals } = await response.json();
    console.log(meals);
    return setDataFilter(meals);
  }

  const fnAlert = (func, message) => {
    func(message);
  };

  if (searchText.length > 1) {
    const msg = ('Sua busca deve conter somente 1 (um) caracter');
    return fnAlert(alert, msg);
  }

  if (radioButton === 'primeira letra') {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchText}`);
    const { meals } = await response.json();
    console.log(meals);
    return setDataFilter(meals);
  }
};

export const handleDrinks = async (radioButton, searchText, setDataFilter) => {
  if (radioButton === 'ingrediente') {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchText}`);
    const { drinks } = await response.json();
    console.log(drinks);
    return setDataFilter(drinks);
  }

  if (radioButton === 'nome') {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`);
    const { drinks } = await response.json();
    console.log(drinks);
    return setDataFilter(drinks);
  }

  const fnAlert = (func, message) => {
    func(message);
  };

  if (searchText.length > 1) {
    const msg = ('Sua busca deve conter somente 1 (um) caracter');
    return fnAlert(alert, msg);
  }

  if (radioButton === 'primeira letra') {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${searchText}`);
    const { drinks } = await response.json();
    console.log(drinks);
    return setDataFilter(drinks);
  }
};
