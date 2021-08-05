import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

export default class InProgressDrinksHelper extends Component {
  render() {
    const { strDrinkThumb, strDrink,
      shareLinkClick, favoriteButtonClick,
      favoriteButton, shareButton, strAlcoholic } = this.props;
    return (
      <div>
        <div>
          <img
            data-testid="recipe-photo"
            src={ strDrinkThumb }
            alt={ strDrink }
            style={ { width: '100px' } }
          />
        </div>
        <div>
          <h3 data-testid="recipe-title">{ strDrink }</h3>
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
          <p data-testid="recipe-category">{ strAlcoholic }</p>
        </div>
      </div>
    );
  }
}

InProgressDrinksHelper.propTypes = {
  strDrinkThumb: PropTypes.oneOfType.isRequired,
  strDrink: PropTypes.oneOfType.isRequired,
  shareLinkClick: PropTypes.oneOfType.isRequired,
  favoriteButtonClick: PropTypes.oneOfType.isRequired,
  favoriteButton: PropTypes.oneOfType.isRequired,
  shareButton: PropTypes.oneOfType.isRequired,
  strAlcoholic: PropTypes.oneOfType.isRequired,
};
