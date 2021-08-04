import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import FooterMenu from '../../components/FooterMenu';
import Header from '../../components/Header';
import RenderFoods from './RenderFoods';

const FoodList = ({ receiveData }) => {
  document.title = 'Comidas';
  if (receiveData.meals === null) {
    // eslint-disable-next-line no-alert
    alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
  }
  return (
    <div>
      <Header />
      { receiveData.length < 1 || !receiveData.meals ? <RenderFoods /> : receiveData.meals
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
        )) }
      <FooterMenu />
    </div>
  );
};

FoodList.propTypes = {
  receiveData: PropTypes.arrayOf({
    meals: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

const mapStateToProps = (state) => ({
  receiveData: state.searchBarReducer.receiveData,
});

export default connect(mapStateToProps)(FoodList);
