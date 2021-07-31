import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect, useDispatch } from 'react-redux';
import { fetchRecipesMain, fetchList } from '../redux/actions';
import Header from '../components/Header';

function HomeRecipe() {
  const MagicMikeDance = 12;
  const magicNumberFive = 5;
  const urlFetch = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const urlFetchList = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
  const [isLoading, setIsLoading] = React.useState(true);
  const [meals, setMeals] = React.useState([]);
  const [mealsFilter, setMealsFilter] = React.useState([]);
  const dispatch = useDispatch();
  const fetchRecipesMainF = (url) => dispatch(fetchRecipesMain(url));
  const fetchListApi = (url) => dispatch(fetchList(url));

  const handlerCard = async () => {
    const response = await fetchRecipesMainF(urlFetch);
    const responseList = await fetchListApi(urlFetchList);
    if (response.length > 1) {
      setMeals([...response]);
      setMealsFilter([...responseList]);
      setIsLoading(false);
    }
  };

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
              >
                {' '}
                {itemButtons.strCategory}
                {' '}
              </button>

            </div>)))}
        { !isLoading && <button type="button">All</button>}
      </div>
      <div>
        {isLoading ? <p>loading...</p>
          : (meals.slice(0, MagicMikeDance).map((itemCard, index) => (

            <div key={ index } data-testid={ `${index}-recipe-card` } className="card">
              <img
                src={ itemCard.strMealThumb }
                data-testid={ `${index}-card-img` }
                alt={ itemCard.strMeal }
              />
              <div className="card-body">
                <p data-testid={ `${index}-card-name` }>{ itemCard.strMeal }</p>
              </div>
            </div>)))}
      </div>
    </div>
  );
}

export default connect(null, null)(HomeRecipe);
