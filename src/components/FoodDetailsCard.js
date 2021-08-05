import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ShareButton from './ShareButton';
import FavoriteButton from './FavoriteButton';

class FoodDetailsCard extends Component {
  render() {
    const indexNine = 9;
    const indexTwentyNine = 29;
    const indexFortyNine = 49;
    const { foodDetails } = this.props;
    const ingredients = Object.values(foodDetails)
      .slice(indexNine, indexTwentyNine);
    const measurements = Object.values(foodDetails)
      .slice(indexTwentyNine, indexFortyNine);

    return (
      <div>
        <img
          data-testid="recipe-photo"
          alt="Foto do prato"
          src={ foodDetails.strMealThumb }
          width="300px"
          height="250px"
        />
        <h1 data-testid="recipe-title">{ foodDetails.strMeal }</h1>
        <ShareButton id={ foodDetails.idMeal } />
        <FavoriteButton />
        <p data-testid="recipe-category">{ foodDetails.strCategory }</p>
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
        <p data-testid="instructions">{ foodDetails.strInstructions }</p>
        <iframe
          data-testid="video"
          width="300px"
          height="250px"
          title="Vídeo da Receita"
          src={ foodDetails.strYoutube }
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  foodDetails: state.foodReducer.foodDetails,
});

FoodDetailsCard.propTypes = {
  foodDetails: PropTypes.shape({
    strMealThumb: PropTypes.string,
    strMeal: PropTypes.string,
    strCategory: PropTypes.string,
    strInstructions: PropTypes.string,
    strYoutube: PropTypes.string,
    idMeal: PropTypes.string,
  }).isRequired,
};

export default connect(mapStateToProps)(FoodDetailsCard);
