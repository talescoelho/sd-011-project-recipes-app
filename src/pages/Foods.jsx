import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  requestMealsMenu,
  requestMealsFilters,
  requestMealsByFilter,
} from '../redux/actions/menuReducerActions';
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
    dispatch(requestMealsMenu());
    dispatch(requestMealsFilters());
  }, [dispatch]);

  if (error) {
    return (<div>Erro</div>);
  }

  return (
    <>
      <div>
        {
          (loadingFilterOptions)
            ? (<div>Loading...</div>)
            : (
              <FilterByCategoryName
                requestMealsMenu={ requestMealsMenu }
                categoryNames={ categoryNames }
                filterByCategory={ requestMealsByFilter }
              />
            )
        }
      </div>
      <div>
        {
          (loadingMeals)
            ? (<div>Loading...</div>)
            : (
              meals.map(({ idMeal, strMeal, strMealThumb }, index) => (
                <Link
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
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  loadingFilterOptions: state.menuReducer.filters.isLoading,
  categoryNames: state.menuReducer.filters.options,
  meals: state.menuReducer.menu,
  loadingMeals: state.menuReducer.isLoading,
  error: state.menuReducer.error,
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
