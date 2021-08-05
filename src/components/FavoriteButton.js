import React, { Component } from 'react';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

class FavoriteButton extends Component {
  constructor() {
    super();

    this.state = {
      whiteHeart: true,
    };
  }
  
  componentDidMount() {
    const favoriteMeals = JSON.parse(localStorage.getItem('favoriteRecipes'));
    
  }

  render() {
    return (
      <button
        type="button"
        data-testid="favorite-btn"
        onClick={ () => }
      >
        <img src={ whiteHeartIcon } alt="favorite food button" />
      </button>
    );
  }
}

export default FavoriteButton;
