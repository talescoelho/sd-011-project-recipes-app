import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { fetchRecipesMain,
  fetchList,
  fetchCategories, GET_CATEGORIES_MEALS } from '../redux/actions';
import Footer from '../components/footer/Footer';
import Header from '../components/Header';
import RenderCategoriesMeals from '../components/RenderCategoriesMeals';

function HomeRecipe() {
  const MagicMikeDance = 12;
  const magicNumberFive = 5;
  const urlFetch = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const urlFetchList = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
  const [isLoading, setIsLoading] = React.useState(true);
  const [meals, setMeals] = React.useState([]);
  const [indexOfCategory, setIndexOfCategory] = React.useState(null);
  const [typeCategories, setTypeCategories] = React.useState(true);
  const [mealsFilter, setMealsFilter] = React.useState([]);
  const [renderCategories, setRenderCategories] = React.useState(false);
  const [whoCategory, setWhoCategory] = React.useState([]);
  const dispatch = useDispatch();
  const fetchRecipesMainF = (url) => dispatch(fetchRecipesMain(url));
  const fetchListApi = (url) => dispatch(fetchList(url));
  const getCategory = (url, type) => dispatch(fetchCategories(url, type));

  const handlerCard = async () => {
    const response = await fetchRecipesMainF(urlFetch);
    const responseList = await fetchListApi(urlFetchList);
    if (response.length > 1) {
      setMeals([...response]);
      setMealsFilter([...responseList]);
      setIsLoading(false);
    }
  };

  const filterCategories = async (value, index) => {
    const categories = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${value}`;
    const responseCategory = await getCategory(categories, GET_CATEGORIES_MEALS);
    setWhoCategory([...responseCategory.meals]);
    if (typeCategories) {
      setTypeCategories(false);
      setIndexOfCategory(index);
      setRenderCategories(!renderCategories);
    } else if (indexOfCategory === index) {
      setRenderCategories(!renderCategories);
    }
  };

  const handlerFilterer = () => {
    setRenderCategories(!renderCategories);
  };

  const renderMeals = () => (
    isLoading ? <p>loading...</p>
      : meals.slice(0, MagicMikeDance).map((itemCard, index) => (
        <Link key={ index } to={ `/comidas/${itemCard.idMeal}` }>

          <div data-testid={ `${index}-recipe-card` } className="card">
            <img
              src={ itemCard.strMealThumb }
              data-testid={ `${index}-card-img` }
              alt={ itemCard.strMeal }
            />
            <div className="card-body">
              <p data-testid={ `${index}-card-name` }>{ itemCard.strMeal }</p>
            </div>
          </div>
        </Link>))
  );

  React.useEffect(() => {
    handlerCard();
  }, []);

  return (
    <div>
      <Header title="Comidas" recipeType="meals" />
      <div>
        {' '}
        {isLoading ? <p>loading...</p>
          : (mealsFilter.slice(0, magicNumberFive).map((itemButtons, index) => (
            <div key={ index }>
              <button
                data-testid={ `${itemButtons.strCategory}-category-filter` }
                type="button"
                onClick={ () => filterCategories(itemButtons.strCategory, index) }
              >
                {' '}
                {itemButtons.strCategory}
                {' '}
              </button>

            </div>)))}
        { !isLoading
        && (
          <button
            onClick={ handlerFilterer }
            type="button"
            data-testid="All-category-filter"
          >
            All
          </button>)}
      </div>
      <div>
        { renderCategories ? RenderCategoriesMeals(whoCategory) : renderMeals() }

      </div>
      <Footer />
    </div>
  );
}

export default connect(null, null)(HomeRecipe);
