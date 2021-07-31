import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import FooterMenu from '../../components/FooterMenu';
import Header from '../../components/Header';

const FoodList = ({ receiveData, fetched }) => (
  <div>
    <Header />
    { fetched && receiveData ? receiveData.meals
      .map((meal, index) => (
        <div key={ index }>
          <h2 data-testid={ `${index}-card-name` }>{ meal.strMeal }</h2>
          <img
            src={ meal.strMealThumb }
            alt={ meal.strMeal }
            data-testid={ `${index}-card-img` }
          />
          <h3 data-testid={ `${index}-recipe-card` }>{ meal.strInstructions }</h3>
        </div>
      )) : <p>teste</p> }
    <FooterMenu />
  </div>
);

FoodList.propTypes = {
  fetched: PropTypes.string.isRequired,
  receiveData: PropTypes.shape({
    meals: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  receiveData: state.searchBarReducer.receiveData,
  fetched: state.searchBarReducer.fetched,
});

export default connect(mapStateToProps)(FoodList);
