import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DrinkShareButton from './DrinkShareButton';
import DrinkFavoriteButton from './DrinkFavoriteButton';

class DrinkDetailsCard extends Component {
  render() {
    const { drinkDetails } = this.props;
    let ingredients = [];
    let measurements = [];
    const array = Array.of(Object.entries(drinkDetails));
    if (array[0].length > 0) {
      ingredients = array[0].filter((item) => item[0].includes('strIngredient'))
        .filter((item) => item[1]).map((item) => item[1]);
      measurements = array[0].filter((item) => item[0].includes('strMeasure'))
        .filter((item) => item[1]).map((item) => item[1]);
    }
    return (
      <div>
        <img
          data-testid="recipe-photo"
          alt="Foto do prato"
          src={ drinkDetails.strDrinkThumb }
          width="300px"
          height="250px"
        />
        <h1 data-testid="recipe-title">{ drinkDetails.strDrink }</h1>
        <DrinkShareButton test="share-btn" id={ drinkDetails.idDrink } />
        <DrinkFavoriteButton test="favorite-btn" id={ drinkDetails.idDrink } />
        <p data-testid="recipe-category">{ drinkDetails.strAlcoholic }</p>
        <ul>
          { ingredients
            .map((item, index) => (item
              ? (
                <li
                  data-testid={ `${index}-ingredient-name-and-measure` }
                  key={ index }
                >
                  {`${item} - ${measurements[index]}`}
                </li>)
              : ''))}
        </ul>
        <p data-testid="instructions">{ drinkDetails.strInstructions }</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  drinkDetails: state.drinkReducer.drinkDetails,
});

DrinkDetailsCard.propTypes = {
  drinkDetails: PropTypes.shape({
    strDrinkThumb: PropTypes.string,
    strDrink: PropTypes.string,
    strAlcoholic: PropTypes.string,
    strInstructions: PropTypes.string,
    idDrink: PropTypes.string,
  }).isRequired,
};

export default connect(mapStateToProps)(DrinkDetailsCard);
