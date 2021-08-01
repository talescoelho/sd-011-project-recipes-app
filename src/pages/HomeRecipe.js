import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect, useDispatch } from 'react-redux';
import { fetchRecipesMain,
  fetchList,
  fetchCategories, GET_CATEGORIES_MEALS } from '../redux/actions';
import Header from '../components/Header';
import RenderCategories from '../components/RenderCategories';

function HomeRecipe() {
  const MagicMikeDance = 12;
  const magicNumberFive = 5;
  const urlFetch = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const urlFetchList = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
  const [isLoading, setIsLoading] = React.useState(true);
  const [meals, setMeals] = React.useState([]);
  const [mealsFilter, setMealsFilter] = React.useState([]);
  const [renderCategories, setRenderCategories] = React.useState(true);
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

  const filterCategories = async (value) => {
    const categories = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${value}`;
    const responseCategory = await getCategory(categories, GET_CATEGORIES_MEALS);
    setWhoCategory([...responseCategory.meals]);

    setRenderCategories(false);
  };

  const renderMeals = () => (
    isLoading ? <p>loading...</p>
      : meals.slice(0, MagicMikeDance).map((itemCard, index) => (

        <div key={ index } data-testid={ `${index}-recipe-card` } className="card">
          <img
            src={ itemCard.strMealThumb }
            data-testid={ `${index}-card-img` }
            alt={ itemCard.strMeal }
          />
          <div className="card-body">
            <p data-testid={ `${index}-card-name` }>{ itemCard.strMeal }</p>
          </div>
        </div>))
  );

  React.useEffect(() => {
    handlerCard();
  }, []);

  return (
    <div>
      <Header title="Comidas" />
      <div>
        {' '}
        {isLoading ? <p>loading...</p>
          : (mealsFilter.slice(0, magicNumberFive).map((itemButtons, index) => (
            <div key={ index }>
              <button
                data-testid={ `${itemButtons.strCategory}-category-filter` }
                type="button"
                onClick={ () => filterCategories(itemButtons.strCategory) }
              >
                {' '}
                {itemButtons.strCategory}
                {' '}
              </button>

            </div>)))}
        { !isLoading && <button type="button">All</button>}
      </div>
      <div>
        { !renderCategories ? RenderCategories(whoCategory) : renderMeals() }

      </div>
    </div>
  );
}

export default connect(null, null)(HomeRecipe);
