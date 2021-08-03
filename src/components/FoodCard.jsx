import React from 'react';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router-dom';
import '../styles/FoodCard.css';

function FoodCard({ recipe, index, type }) {
  const foodName = type === 'drinks' ? 'strDrink' : 'strMeal';
  const foodImage = type === 'drinks' ? 'strDrinkThumb' : 'strMealThumb';
  const foodId = type === 'drinks' ? 'idDrink' : 'idMeal';
  const { pathname } = useLocation();
  const history = useHistory();

  const HandleRedirect = (id) => {
    history
      .push(`/${pathname.includes('/bebidas') ? 'bebidas' : 'comidas'}/${recipe[id]}`);
  };

  return (
    <div
      className="foodCardContainer"
      data-testid={ `${index}-recipe-card` }
      aria-hidden="true"
      onClick={ () => HandleRedirect(foodId) }
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

FoodCard.propTypes = {
  recipe: PropTypes.objectOf(String),
  index: PropTypes.number,
  type: PropTypes.string,
}.isRequired;
