import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  requestDrinkMenu,
  requestDrinksFilters,
} from '../redux/actions/menuReducerActions';
import FilterByCategoryName from '../components/filterByCategoryName';

const Drinks = ({
  dispatch,
  error,
  loadingFilterOptions,
  categoryNames,
  loadingDrinks,
  drinks,
}) => {
  useEffect(() => {
    dispatch(requestDrinkMenu());
    dispatch(requestDrinksFilters());
  }, [dispatch]);

  if (loadingDrinks) {
    return (<div>Loading...</div>);
  }

  if (error) {
    return (<div>Erro</div>);
  }

  return (
    <>
      <div>
        {
          (loadingFilterOptions)
            ? (<div>Loading...</div>)
            : (<FilterByCategoryName categoryNames={ categoryNames } />)
        }
      </div>
      {
        drinks.map(({ strDrink, strDrinkThumb }, index) => (
          <div key={ index } data-testid={ `${index}-recipe-card` }>
            <img
              data-testid={ `${index}-card-img` }
              src={ strDrinkThumb }
              alt={ `${strDrink} recipe` }
              width="100px"
            />
            <h3 data-testid={ `${index}-card-name` }>{ strDrink }</h3>
          </div>
        ))
      }
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
