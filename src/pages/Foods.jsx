import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  requestMealsAPI,
  requestMealsFilters,
} from '../redux/actions/mealsReducerActions';
import FilterByCategoryName from '../components/filterByCategoryName';

const Foods = ({
  dispatch,
  error,
  loadingFilterOptions,
  categoryNames,
  loadingMeals,
  meals,
}) => {
  useEffect(() => {
    dispatch(requestMealsAPI());
    dispatch(requestMealsFilters());
  }, [dispatch]);

  if (loadingMeals) {
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
        meals.map(({ strMeal, strMealThumb }, index) => (
          <div key={ index } data-testid={ `${index}-recipe-card` }>
            <img
              data-testid={ `${index}-card-img` }
              src={ strMealThumb }
              alt={ `${strMeal} recipe` }
              width="100px"
            />
            <h3 data-testid={ `${index}-card-name` }>{ strMeal }</h3>
          </div>
        ))
      }
    </>
  );
};

const mapStateToProps = (state) => ({
  loadingFilterOptions: state.mealsReducer.filters.isLoading,
  categoryNames: state.mealsReducer.filters.options,
  meals: state.mealsReducer.meals,
  loadingMeals: state.mealsReducer.isLoading,
  error: state.mealsReducer.error,
});

Foods.propTypes = {
  dispatch: PropTypes.func.isRequired,
  loadingFilterOptions: PropTypes.bool.isRequired,
  categoryNames: PropTypes.arrayOf(PropTypes.string),
  loadingMeals: PropTypes.bool.isRequired,
  error: PropTypes.string,
  meals: PropTypes.arrayOf(PropTypes.object),
};

Foods.defaultProps = {
  categoryNames: [],
  meals: [],
  error: null,
};

export default connect(mapStateToProps)(Foods);
