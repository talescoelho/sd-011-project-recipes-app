import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  requestDrinkMenu,
  requestDrinksFilters,
  requestDrinksByFilter,
} from '../redux/actions/menuReducerActions';
import FilterMenu from '../components/filterMenu';

const Drinks = ({
  dispatch,
  error,
  loadingFilterOptions,
  categoryNames,
  loadingDrinks,
  drinks,
}) => {
  useEffect(() => {
    dispatch(requestDrinksFilters());
  }, [dispatch]);

  if (error) {
    return (<div>Erro</div>);
  }

  return (
    <>
      <nav>
        {
          (loadingFilterOptions)
            ? (<div>Loading...</div>)
            : (
              <FilterMenu
                requestMealsMenu={ requestDrinkMenu }
                categoryNames={ categoryNames }
                filterByCategory={ requestDrinksByFilter }
              />
            )
        }
      </nav>
      <main>
        {
          (loadingDrinks)
            ? (<div>Loading...</div>)
            : (
              drinks.map(({ idDrink, strDrink, strDrinkThumb }, index) => (
                <Link
                  data-testid={ `${index}-recipe-card` }
                  key={ index }
                  to={ `/bebidas/${idDrink}` }
                >
                  <img
                    data-testid={ `${index}-card-img` }
                    src={ strDrinkThumb }
                    alt={ `${strDrink} recipe` }
                    width="100px"
                  />
                  <h3 data-testid={ `${index}-card-name` }>{ strDrink }</h3>
                </Link>
              ))
            )
        }
      </main>
    </>
  );
};

const mapStateToProps = (state) => ({
  loadingFilterOptions: state.menuReducer.filters.isLoading,
  categoryNames: state.menuReducer.filters.options,
  drinks: state.menuReducer.menu,
  loadingDrinks: state.menuReducer.isLoading,
  error: state.menuReducer.error,
});

Drinks.propTypes = {
  dispatch: PropTypes.func.isRequired,
  loadingFilterOptions: PropTypes.bool.isRequired,
  categoryNames: PropTypes.arrayOf(PropTypes.string),
  loadingDrinks: PropTypes.bool.isRequired,
  error: PropTypes.string,
  drinks: PropTypes.arrayOf(PropTypes.object),
};

Drinks.defaultProps = {
  categoryNames: [],
  drinks: [],
  error: null,
};

export default connect(mapStateToProps)(Drinks);
