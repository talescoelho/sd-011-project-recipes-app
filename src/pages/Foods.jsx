import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  requestMealsMenu,
  requestMealsFilters,
  requestMealsByFilter,
} from '../redux/actions/menuReducerActions';
import FilterMenu from '../components/FilterMenu';
import Footer from '../components/common/Footer';
import Header from '../components/Header/Header';

const Foods = ({
  dispatch,
  error,
  loadingFilterOptions,
  categoryNames,
  loadingMeals,
  meals,
  ingredients,
  loading,
}) => {
  useEffect(() => {
    dispatch(requestMealsFilters());
  }, [dispatch]);

  if (error) {
    return (<div>Erro</div>);
  }

  return (
    <>
      <Header
        page="Comidas"
        showSearchBtn
      />
      {loading && <div>CARREGANDO...</div>}

      <ul>
        {
          !loading && ingredients.map(
            (value, index) => (
              <li key={ index }>
                {value}
              </li>),
          )
        }

        {/* {
          !loading && !ingredients && byName.map(
            (value, index) => (
              <li key={ index }>
                {value}
              </li>
            ),
          )
        } */}
      </ul>
      <nav>
        {
          (loadingFilterOptions)
            ? (<div>Loading...</div>)
            : (
              <FilterMenu
                requestMenu={ requestMealsMenu }
                categoryNames={ categoryNames }
                filterByCategory={ requestMealsByFilter }
              />
            )
        }
      </nav>
      <main>
        {
          (loadingMeals)
            ? (<div>Loading...</div>)
            : (
              meals.map(({ idMeal, strMeal, strMealThumb }, index) => (
                <Link
                  aria-label="card-menu"
                  data-testid={ `${index}-recipe-card` }
                  key={ index }
                  to={ `/comidas/${idMeal}` }
                >
                  <img
                    data-testid={ `${index}-card-img` }
                    src={ strMealThumb }
                    alt={ `${strMeal} recipe` }
                    width="100px"
                  />
                  <h3 data-testid={ `${index}-card-name` }>{ strMeal }</h3>
                </Link>
              ))
            )
        }
      </main>
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => ({
  loadingFilterOptions: state.menuReducer.filters.isLoading,
  categoryNames: state.menuReducer.filters.options,
  meals: state.menuReducer.menu,
  loadingMeals: state.menuReducer.isLoading,
  error: state.menuReducer.error,
  ingredients: state.menuReducer.ingredient,
  loading: state.menuReducer.isLoading,
});

Foods.propTypes = {
  dispatch: PropTypes.func.isRequired,
  loadingFilterOptions: PropTypes.bool.isRequired,
  categoryNames: PropTypes.arrayOf(PropTypes.string),
  loadingMeals: PropTypes.bool.isRequired,
  error: PropTypes.string,
  meals: PropTypes.arrayOf(PropTypes.object),
  ingredients: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
};

Foods.defaultProps = {
  categoryNames: [],
  meals: [],
  error: null,
};

export default connect(mapStateToProps)(Foods);
