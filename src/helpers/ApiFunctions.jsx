const mensagem = 'Sinto muito, não encontramos nenhuma receita para esses filtros.';

export const handleFoods = async (radioButton, searchText, setDataFilter, setLoading) => {
  if (radioButton === 'ingrediente') {
    setLoading(true);
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchText}`);
    const { meals } = await response.json();
    if (!meals) {
      // eslint-disable-next-line
      alert(mensagem);
      setLoading(false);
      return setDataFilter([]);
    }
    setLoading(false);
    return setDataFilter(meals);
  }

  if (radioButton === 'nome') {
    setLoading(true);
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`);
    const { meals } = await response.json();
    if (!meals) {
      // eslint-disable-next-line
      alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
      setLoading(false);
      return setDataFilter([]);
    }
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
  if (!meals) {
    // eslint-disable-next-line
    alert(mensagem);
    setLoading(false);
    return setDataFilter([]);
  }
  setLoading(false);
  return setDataFilter(meals);
};

export const handleDrinks = async (radioButton, searchText, setDataFilter,
  setLoading) => {
  if (radioButton === 'ingrediente') {
    try {
      setLoading(true);
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchText}`);
      const { drinks } = await response.json();
      return setDataFilter(drinks);
    } catch (error) {
      console.log(error);
      // eslint-disable-next-line
      alert(mensagem);
      setLoading(false);
      return setDataFilter([]);
    }
  }

  if (radioButton === 'nome') {
    setLoading(true);
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`);
    const { drinks } = await response.json();
    if (drinks === null) {
      // eslint-disable-next-line
      alert(mensagem);
      setLoading(false);
      return setDataFilter([]);
    }
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
  if (drinks === null) {
    // eslint-disable-next-line
    alert(mensagem);
    setLoading(false);
    return setDataFilter([]);
  }
  setLoading(false);
  return setDataFilter(drinks);
};
