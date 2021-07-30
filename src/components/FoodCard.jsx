import React from 'react';
import '../styles/FoodCard.css';

function FoodCard() {
  const index = 1;
  return (
    <div
      className="foodCardContainer"
    >
      <img
        className="foodImageRecipe"
        src=""
        alt=" Recipe"
        data-testid={ `${index}-card-img` }
      />
      <p
        data-testid={ `${index}-card-name` }
        className="FoodNameRecipe"
      >
        Recipes name
      </p>
    </div>
  );
}

export default FoodCard;
