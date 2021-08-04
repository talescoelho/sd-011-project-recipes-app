import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import Header from '../../components/Header';
import { fetchRecipesAPIAction, clearDataAction } from '../../redux/actions';

function ExploreByIngredients() {
  // const urlFetch = `https://www.themealdb.com/api/json/v1/1/search.php?s=${}`;
  const magicNumberFive = 12;
  const [showRedirect, setShowRedirect] = React.useState(false);
  const [data, setData] = React.useState([]);
  const dispatch = useDispatch();
  const fetchMeals = (url,
    recipeType) => dispatch(fetchRecipesAPIAction(url, recipeType));
  const clearData = (recipeType) => dispatch(clearDataAction(recipeType));

  const fetchIngredients = async () => {
    const url = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
    const response = await fetch(url);
    const dataFetch = await response.json();
    setData([...dataFetch.meals]);
  };

  const redirectMeals = (ingrediente) => {
    clearData('meals');
    fetchMeals(`https://www.themealdb.com/api/json/v1/1/search.php?s=${ingrediente}`, 'meals');
    setShowRedirect(true);
  };

  React.useEffect(() => {
    fetchIngredients();
  }, []);
  return (
    <div>
      <Header title="Explorar Ingredientes" />
      {data && data.slice(0, magicNumberFive).map((item, index) => (
        <div key={ index }>
          <button
            data-testid={ `${index}-ingredient-card` }
            type="button"
            onClick={ () => redirectMeals(item.strIngredient) }
          >
            {' '}
            oi
            {' '}
          </button>
          <h2
            data-testid={ `${index}-card-name` }
          >
            { item.strIngredient }
          </h2>
          <img
            data-testid={ `${index}-card-img` }
            src={ `https://www.themealdb.com/images/ingredients/${item.strIngredient}-Small.png` }
            alt={ item.strIngredient }
          />
        </div>))}
      {showRedirect && <Redirect to="/comidas" />}
      <Footer />
    </div>
  );
}

export default connect(null, null)(ExploreByIngredients);
