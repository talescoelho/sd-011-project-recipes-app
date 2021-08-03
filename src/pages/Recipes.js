import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getXFirstElementsFromArray from '../helpers/utils';
import { fetchDrinks, fetchMeals } from '../actions';
import Footer from '../components/Footer';
import RecipeCard from '../components/RecipeCard';
import Loading from '../components/Loading';

const recipesQuantity = 12;

function Recipes({
  history: { location: { pathname } },
  dispatchFetchMeals, dispatchFetchDrinks,
  meals, mealsLoading, mealsError,
  drinks, drinksLoading, drinksError,
}) {
  const [recipes, setRecipes] = React.useState([]);

  React.useEffect(() => {
    if (pathname === '/comidas') dispatchFetchMeals();

    if (pathname === '/bebidas') dispatchFetchDrinks();
  }, [pathname, dispatchFetchMeals, dispatchFetchDrinks]);

  React.useEffect(() => {
    if (pathname === '/comidas') {
      setRecipes(getXFirstElementsFromArray(meals, recipesQuantity));
    }

    if (pathname === '/bebidas') {
      setRecipes(getXFirstElementsFromArray(drinks, recipesQuantity));
    }

    if (mealsError || drinksError) setRecipes([]);
  }, [pathname, meals, mealsError, drinks, drinksError]);

  return (
    <>
      <header>
        <h1 data-testid="page-title">Tela Principal de Receitas</h1>
        <button type="button" data-testid="profile-top-btn">Profile</button>
        <button type="button" data-testid="search-top-btn">Search</button>
      </header>
      <main data-testid="recipes-page">
        { pathname === '/comidas' && mealsError }
        { pathname === '/bebidas' && drinksError }
        {
          mealsLoading || drinksLoading
            ? <Loading />
            : recipes.map((recipe, index) => (
              <RecipeCard key={ index } index={ index } recipe={ recipe } />
            ))
        }
      </main>
      <Footer />
    </>
  );
}

const mapStateToProps = ({ mealsReducer, drinksReducer }) => ({
  meals: mealsReducer.meals,
  mealsLoading: mealsReducer.loading,
  mealsError: mealsReducer.error,
  drinks: drinksReducer.drinks,
  drinksLoading: drinksReducer.loading,
  drinksError: drinksReducer.error,
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
  drinks: PropTypes.arrayOf(PropTypes.object),
  dispatchFetchMeals: PropTypes.func,
  dispatchFetchDrinks: PropTypes.func,
}.isRequired;
