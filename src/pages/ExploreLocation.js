import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
import RecipeCard from '../components/RecipeCard';
import { fetchRecipes } from '../actions';
import { fetchAreas } from '../actions/areas';

function ExploreLocation({
  history: { location: { pathname } },
  dispatchFetchRecipes,
  dispatchFetchArea,
  areas,
  recipes,
  loading,
  error,
}) {
  useEffect(() => {
    if (pathname.includes('comidas')) {
      dispatchFetchRecipes('meals');
    } else {
      dispatchFetchRecipes('drinks');
    }
  }, [pathname, dispatchFetchRecipes]);

  useEffect(() => {
    dispatchFetchArea();
  }, [dispatchFetchArea]);

  return !loading ? (
    <>
      <Header withSearch pageTitle="Explorar Origem" />
      <main>
        { error && `${error}` }
        <label htmlFor="area">
          <select name="area" data-testid="explore-by-area-dropdown">
            { areas.map(({ strArea: area }, index) => (
              <option data-testid={ `${area}-option` } key={ index }>{ area }</option>
            ))}
          </select>
        </label>
        <section>
          { recipes.map((recipe, index) => (
            <RecipeCard recipe={ recipe } index={ index } key={ index } />
          )) }
        </section>
      </main>
      <Footer />
    </>
  ) : <Loading />;
}

const mapStateToProps = ({
  recipesReducer: { recipes, loading, error },
  areasReducer: { areas },
}) => ({
  recipes,
  loading,
  error,
  areas,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchFetchRecipes: (type) => dispatch(fetchRecipes(type)),
  dispatchFetchArea: () => dispatch(fetchAreas()),
});

ExploreLocation.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }),
    recipes: PropTypes.arrayOf(PropTypes.object),
    area: PropTypes.arrayOf(PropTypes.object),
    dispatchFetchRecipes: PropTypes.func,
    dispatchFetchArea: PropTypes.func,
  }),
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(ExploreLocation);
