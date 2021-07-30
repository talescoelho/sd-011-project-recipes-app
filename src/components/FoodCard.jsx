import React from 'react';
import '../styles/FoodCard.css';

function FoodCard({ recipe }) {
  console.log(recipe);
  const { index, strMeal, strMealThumb } = recipe;
  return (
    <div
      className="foodCardContainer"
    >
      <img
        className="foodImageRecipe"
        src={ strMealThumb }
        alt=" Recipe"
        data-testid={ `${index}-card-img` }
      />
      <p
        data-testid={ `${index}-card-name` }
        className="FoodNameRecipe"
      >
        {
          strMeal
        }
      </p>
    </div>
  );
}

export default FoodCard;
