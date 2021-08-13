import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DrinkShareButton from './DrinkShareButton';
import DrinkFavoriteButton from './DrinkFavoriteButton';
import IngredientsDrinkInProgress from './IngredientsDrinkInProgress';

class DrinkInProgressCard extends Component {
  render() {
    const { drinkDetails } = this.props;
    return (
      <div>
        <img
          data-testid="recipe-photo"
          alt="imagem da receita"
          src={ drinkDetails.strDrinkThumb }
          width="300px"
          height="250px"
        />
        <p data-testid="recipe-title">{drinkDetails.strDrink}</p>
        <DrinkShareButton test="share-btn" id={ drinkDetails.idDrink } />
        <DrinkFavoriteButton test="favorite-btn" id={ drinkDetails.idDrink } />
        <p data-testid="recipe-category">{ drinkDetails.strCategory }</p>
        <IngredientsDrinkInProgress />
        <p data-testid="instructions">{ drinkDetails.strInstructions }</p>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  drinkDetails: state.drinkReducer.drinkDetails,
});

DrinkInProgressCard.propTypes = {
  drinkDetails: PropTypes.shape({
    strDrinkThumb: PropTypes.string,
    strDrink: PropTypes.string,
    strCategory: PropTypes.string,
    strInstructions: PropTypes.string,
    strYoutube: PropTypes.string,
    idDrink: PropTypes.string,
  }).isRequired,
};

export default connect(mapStateToProps)(DrinkInProgressCard);
