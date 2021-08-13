import { fetchFoodCards } from '../Redux/reducers/recipes';

const getFood = (food, db) => async (dispatch) => {
  const { type, query } = food;
  const warning = 'Sua busca deve conter somente 1 (um) caracter';
  const database = {
    meals: {
      ingredient: `https://www.themealdb.com/api/json/v1/1/filter.php?i=${query}`,
      name: `https://www.themealdb.com/api/json/v1/1/search.php?s=${food ? query : ''}`,
      letra: `https://www.themealdb.com/api/json/v1/1/search.php?f=${query}`,
    },
    drinks: {

      ingredient: `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${query}`,
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
    if (filtered === null && food) {
      return alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
    }

    try {
      const list = food ? data[db] : filtered;
      dispatch(fetchFoodCards({ filtered: list, cat: db }));
    } catch (error) {
      throw new Error(error);
    }
  };
  return fetchData();
};

export default getFood;
