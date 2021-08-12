import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ShareButton from './ShareButton';
import FavoriteButton from './FavoriteButton';
import IngredientesFoodInProgress from './IngredientesFoodInProgress';

class FoodInProgressCard extends Component {
  render() {
    const { foodDetails } = this.props;
    return (
      <div>
        <img
          data-testid="recipe-photo"
          alt="imagem da receita"
          src={ foodDetails.strMealThumb }
          width="300px"
          height="250px"
        />
        <p data-testid="recipe-title">{foodDetails.strMeal}</p>
        <ShareButton test="share-btn" id={ foodDetails.idMeal } />
        <FavoriteButton test="favorite-btn" id={ foodDetails.idMeal } />
        <p data-testid="recipe-category">{ foodDetails.strCategory }</p>
        <IngredientesFoodInProgress />
        <p data-testid="instructions">{ foodDetails.strInstructions }</p>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  foodDetails: state.foodReducer.foodDetails,
});

FoodInProgressCard.propTypes = {
  foodDetails: PropTypes.shape({
    strMealThumb: PropTypes.string,
    strMeal: PropTypes.string,
    strCategory: PropTypes.string,
    strInstructions: PropTypes.string,
    strYoutube: PropTypes.string,
    idMeal: PropTypes.string,
  }).isRequired,
};

export default connect(mapStateToProps)(FoodInProgressCard);
