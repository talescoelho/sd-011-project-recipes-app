import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getXFirstElementsFromArray from '../helpers/utils';
import { fetchDrinks, fetchMeals } from '../actions';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Loading from '../components/Loading';
import RecipesFilterButtons from '../components/RecipesFilterButtons';
import CardsList from '../components/CardsList';

const recipesQuantity = 12;

function Recipes({
  history: { location: { pathname } },
  dispatchFetchMeals, dispatchFetchDrinks,
  meals, mealsLoading, mealsError,
  drinks, drinksLoading, drinksError, recipesHeaderSearch,
}) {
  const [recipes, setRecipes] = React.useState([]);

  React.useEffect(() => {
    if (pathname === '/comidas') dispatchFetchMeals();
    else dispatchFetchDrinks();
  }, [pathname, dispatchFetchMeals, dispatchFetchDrinks]);

  React.useEffect(() => {
    if (pathname === '/comidas') {
      setRecipes(getXFirstElementsFromArray(meals, recipesQuantity));
    } else {
      setRecipes(getXFirstElementsFromArray(drinks, recipesQuantity));
    }

    if (mealsError || drinksError) setRecipes([]);
  }, [pathname, meals, mealsError, drinks,
    drinksError, dispatchFetchDrinks, dispatchFetchMeals]);

  function renderHeader() {
    return pathname === '/comidas'
      ? <Header withSearch pageTitle="Comidas" />
      : <Header withSearch pageTitle="Bebidas" />;
  }

  return (
    <>
      { renderHeader() }
      <main data-testid="recipes-page">
        <RecipesFilterButtons pathname={ pathname } />
        { pathname === '/comidas' && mealsError && `${mealsError}` }
        { pathname === '/bebidas' && drinksError && `${drinksError}` }
        {
          (mealsLoading || drinksLoading)
            ? <Loading />
            : (
              <CardsList
                recipes={ recipes }
                recipesHeaderSearch={ recipesHeaderSearch }
                recipesQuantity={ recipesQuantity }
              />)
        }
      </main>
      <Footer />
    </>
  );
}

const mapStateToProps = ({ mealsAndDrinksReducer, headerSearchReducer }) => ({
  meals: mealsAndDrinksReducer.meals.meals,
  mealsLoading: mealsAndDrinksReducer.meals.loading,
  mealsError: mealsAndDrinksReducer.meals.error,
  drinks: mealsAndDrinksReducer.drinks.drinks,
  drinksLoading: mealsAndDrinksReducer.drinks.loading,
  drinksError: mealsAndDrinksReducer.drinks.error,

  recipesHeaderSearch: headerSearchReducer.recipes,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchFetchMeals: () => dispatch(fetchMeals()),
  dispatchFetchDrinks: () => dispatch(fetchDrinks()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);

Recipes.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }),
  }),
  meals: PropTypes.arrayOf(PropTypes.object),
  mealsLoading: PropTypes.bool,
  mealsError: PropTypes.string,
  drinks: PropTypes.arrayOf(PropTypes.object),
  drinksLoading: PropTypes.bool,
  drinksError: PropTypes.string,
  dispatchFetchMeals: PropTypes.func,
  dispatchFetchDrinks: PropTypes.func,
  recipesHeaderSearch: PropTypes.arrayOf(PropTypes.object),
}.isRequired;
