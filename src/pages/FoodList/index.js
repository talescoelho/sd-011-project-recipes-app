import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FooterMenu from '../../components/FooterMenu';
import Header from '../../components/Header';

const FoodList = ({ receiveData, fetched }) => {
  if (receiveData.meals === null) {
    // eslint-disable-next-line no-alert
    alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
  }
  return (
    <div>
      <Header />
      { fetched && receiveData.meals !== null ? receiveData.meals
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
        )) : <p>Pesquise por uma comida.</p> }
      <FooterMenu />
    </div>
  );
};

const mapStateToProps = (state) => ({
  receiveData: state.searchBarReducer.receiveData,
  fetched: state.searchBarReducer.fetched,
});

export default connect(mapStateToProps)(FoodList);

FoodList.propTypes = {
  receiveData: PropTypes.func.isRequired,
  fetched: PropTypes.bool.isRequired,
  meals: PropTypes.objectOf(PropTypes.string).isRequired,
};
