import React from 'react';
import { Link } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { fetchDrinkMain,
  fetchRecipesListDrinks,
  GET_CATEGORIES_DRINK, fetchCategories } from '../redux/actions';
import Header from '../components/Header';
import Footer from '../components/footer/Footer';
import RenderCategoriesDrinks from '../components/RenderCategoriesDrinks';

function HomeDrinks() {
  const urlFetch = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  const urlFetchList = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
  const [isLoading, setIsLoading] = React.useState(true);
  const [whoCategory, setWhoCategory] = React.useState([]);
  const [indexOfCategory, setIndexOfCategory] = React.useState(null);
  const [typeCategories, setTypeCategories] = React.useState(true);
  const [renderCategories, setRenderCategories] = React.useState(false);
  const [drinksList, setDrinksList] = React.useState([]);
  const [drinks, setDrinks] = React.useState([]);

  const dispatch = useDispatch();
  const MagicMikeDance = 12;
  const MagicNumber = 5;
  const fetchRecipesMainF = (url) => dispatch(fetchDrinkMain(url));
  const fetchListApi = (url) => dispatch(fetchRecipesListDrinks(url));
  const getCategory = (url, type) => dispatch(fetchCategories(url, type));

  const handlerCard = async () => {
    const response = await fetchRecipesMainF(urlFetch);
    const responseList = await fetchListApi(urlFetchList);
    console.log(response);
    if (response.length > 1 && responseList.length > 1) {
      setDrinks([...response]);
      setDrinksList([...responseList]);
      setIsLoading(false);
    }
  };

  const filterCategories = async (value, index) => {
    const categories = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${value}`;
    const responseCategory = await getCategory(categories, GET_CATEGORIES_DRINK);
    setWhoCategory([...responseCategory.drinks]);
    if (typeCategories) {
      setTypeCategories(false);
      setIndexOfCategory(index);
      setRenderCategories(!renderCategories);
    } else if (indexOfCategory === index) {
      setRenderCategories(!renderCategories);
    }
  };

  React.useEffect(() => {
    handlerCard();
  }, []);

  const handlerFilterer = () => {
    setRenderCategories(!renderCategories);
  };

  const renderDrinks = () => (
    isLoading ? <p>loading...</p>
      : drinks.slice(0, MagicMikeDance).map((itemCard, index) => (
        <Link key={ index } to={ `/bebidas/${itemCard.idDrink}` }>
          <div data-testid={ `${index}-recipe-card` } className="card">
            <img
              src={ itemCard.strDrinkThumb }
              data-testid={ `${index}-card-img` }
              alt={ itemCard.strDrinks }
            />
            <div className="card-body">
              <p data-testid={ `${index}-card-name` }>{ itemCard.strDrink }</p>
            </div>
          </div>
        </Link>
      ))
  );

  return (
    <div>
      <Header title="Bebidas" />
      { !isLoading && (drinksList.slice(0, MagicNumber).map((itemList, index) => (
        <div key={ index }>
          <button
            data-testid={ `${itemList.strCategory}-category-filter` }
            type="button"
            onClick={ () => filterCategories(itemList.strCategory, index) }
          >
            {' '}
            { itemList.strCategory }
            {' '}
          </button>
        </div>
      )))}
      { !isLoading
        && (
          <button
            onClick={ handlerFilterer }
            type="button"
            data-testid="All-category-filter"
          >
            All
          </button>)}

      <div>
        { renderCategories ? RenderCategoriesDrinks(whoCategory) : renderDrinks() }
      </div>
      <Footer />

    </div>
  );
}

export default connect(null, null)(HomeDrinks);
