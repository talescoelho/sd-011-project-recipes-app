import React from 'react';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

function FoodsDetails() {
  function renderDetails() {
    return (
      <div>
        <img
          data-testid="recipe-photo"
          alt="somefood"
        />
        <h3 data-testid="recipe-title">recipeTitle</h3>
        <input
          type="image"
          alt="someText"
          data-testid="share-btn"
          src={ shareIcon }
        />
        <input
          type="image"
          alt="someText"
          data-testid="favorite-btn"
          src={ blackHeartIcon }
        />
        <p data-testid="recipe-category">Category</p>
      </div>
    );
  }

  function renderIngredientsCard() {
    return (
      
    );
  }

  return (
    <div>
      {renderDetails()}
    </div>
  );
}

export default FoodsDetails;
