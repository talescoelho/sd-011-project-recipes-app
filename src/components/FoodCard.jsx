import React from 'react';
import '../styles/FoodCard.css';

function FoodCard({ recipe, index, type }) {
  const foodName = type === 'drinks' ? 'strDrink' : 'strMeal';
  const foodImage = type === 'drinks' ? 'strDrinkThumb' : 'strMealThumb';

  return (
    <div
      className="foodCardContainer"
    >
      <img
        className="foodImageRecipe"
        src={ recipe[foodImage] }
        alt=" Recipe"
        data-testid={ `${index}-card-img` }
      />
      <p
        data-testid={ `${index}-card-name` }
        className="FoodNameRecipe"
      >
        {
          recipe[foodName]
        }
      </p>
    </div>
  );
}

export default FoodCard;
