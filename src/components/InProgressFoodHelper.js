import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

export default class InProgressFoodHelper extends Component {
  render() {
    const { strMealThumb,
      strMeal, shareLinkClick,
      favoriteButtonClick, favoriteButton, shareButton, strCategory } = this.props;
    return (
      <div>
        <div>
          <img
            data-testid="recipe-photo"
            src={ strMealThumb }
            alt={ strMeal }
            style={ { width: '100px' } }
          />
        </div>
        <div>
          <h3 data-testid="recipe-title">{ strMeal }</h3>
          <button
            type="button"
            data-testid="share-btn"
            onClick={ shareLinkClick }
          >
            <img src={ shareIcon } alt="share" />
          </button>
          <button
            type="button"
            onClick={ favoriteButtonClick }
          >
            <img
              data-testid="favorite-btn"
              src={ !favoriteButton ? whiteHeartIcon : blackHeartIcon }
              alt="favorite"
            />
          </button>
          {shareButton ? <span style={ { color: 'red' } }>Link copiado!</span> : null}
          <p data-testid="recipe-category">{ strCategory }</p>
        </div>
      </div>
    );
  }
}

InProgressFoodHelper.propTypes = {
  strMealThumb: PropTypes.oneOfType.isRequired,
  strMeal: PropTypes.oneOfType.isRequired,
  shareLinkClick: PropTypes.oneOfType.isRequired,
  favoriteButtonClick: PropTypes.oneOfType.isRequired,
  favoriteButton: PropTypes.oneOfType.isRequired,
  shareButton: PropTypes.oneOfType.isRequired,
  strCategory: PropTypes.oneOfType.isRequired,
};
