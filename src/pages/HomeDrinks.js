import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { fetchDrinkMain, fetchRecipesListDrinks } from '../redux/actions';
import Header from '../components/Header';

function HomeDrinks() {
  const urlFetch = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  const urlFetchList = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
  const [isLoading, setIsLoading] = React.useState(true);
  const [whoCategory, setWhoCategory] = React.useState([]);
  const [drinksList, setDrinksList] = React.useState([]);
  const [drinks, setDrinks] = React.useState([]);

  const dispatch = useDispatch();
  const MagicMikeDance = 12;
  const MagicNumber = 5;
  const fetchRecipesMainF = (url) => dispatch(fetchDrinkMain(url));
  const fetchListApi = (url) => dispatch(fetchRecipesListDrinks(url));

  const handlerCard = async () => {
    const response = await fetchRecipesMainF(urlFetch);
    const responseList = await fetchListApi(urlFetchList);
    if (response.length > 1 && responseList.length > 1) {
      setDrinks([...response]);
      console.log(responseList);
      setDrinksList([...responseList]);
      setIsLoading(false);
    }
  };

  const filterCategories = async (value) => {
    const categories = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${value}`;
    const responseCategory = await getCategory(categories, GET_CATEGORIES_MEALS);
    setWhoCategory([...responseCategory.meals]);

    setRenderCategories(false);
  };

  React.useEffect(() => {
    handlerCard();
  }, []);

  // console.log(meals, isLoading);
  return (
    <div>
      <Header title="Bebidas" />
      { !isLoading && (drinksList.slice(0, MagicNumber).map((itemList, index) => (
        <div key={ index }>
          <button
            data-testid={ `${itemList.strCategory}-category-filter` }
            type="button"
          >
            {' '}
            { itemList.strCategory }
            {' '}
          </button>
        </div>
      )))}
      { !isLoading && <button type="button">All</button> }

      <div>
        {isLoading ? <p>loading...</p>
          : (drinks.slice(0, MagicMikeDance).map((itemCard, index) => (

            <div key={ index } data-testid={ `${index}-recipe-card` } className="card">
              <img
                src={ itemCard.strDrinkThumb }
                data-testid={ `${index}-card-img` }
                alt={ itemCard.strDrink }
              />
              <div className="card-body">
                <p data-testid={ `${index}-card-name` }>{ itemCard.strDrink }</p>
              </div>
            </div>)))}
      </div>
    </div>
  );
}

export default connect(null, null)(HomeDrinks);
