import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { requestMealsAPI } from '../redux/actions/mealsReducerActions';

const Foods = ({ requestFoods, loading, error, meals }) => {
  useEffect(() => {
    requestFoods();
  }, [requestFoods]);

  if (loading) {
    return (<div>Loading...</div>);
  }

  if (error) {
    return (<div>Erro</div>);
  }

  return (
    <>
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
  meals: state.mealsReducer.meals,
  loading: state.mealsReducer.isLoading,
  error: state.mealsReducer.error,
});

const mapDispatchToProps = (dispatch) => ({
  requestFoods: () => dispatch(requestMealsAPI()),
});

Foods.propTypes = {
  requestFoods: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  meals: PropTypes.arrayOf(PropTypes.object),
};

Foods.defaultProps = {
  meals: [],
  error: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(Foods);
