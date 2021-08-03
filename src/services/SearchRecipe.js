const getFood = async (food, db) => {
  const { type, query } = food;
  const warning = 'Sua busca deve conter somente 1 (um) caracter';
  const database = {
    meals: {
      ingredient: `https://www.themealdb.com/api/json/v1/1/filter.php?i=${query}`,
      name: `https://www.themealdb.com/api/json/v1/1/search.php?s=${food ? query : ''}`,
      letra: `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`,
    },
    drinks: {
      ingredient: `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${query}`,
      name: `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${food ? query : ''}`,
      letra: `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${query}`,
    },
  };
  const fetchData = async () => {
    const maxCards = 12;
    if (type === 'letra' && query.length > 1) {
      return alert(warning);
    }
    const URL = food ? database[db][type] : database[db].name;

    const response = await fetch(URL);
    const data = await response.json();
    const filtered = data[db] && data[db].filter((item, index) => index < maxCards);

    try {
      return food ? data[db] : filtered;
    } catch (error) {
      throw new Error(error);
    }
  };
  return fetchData();
};

export default getFood;
