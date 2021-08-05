import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function RecomendationCard({ recipe, index }) {
  const { strDrink,
    strDrinkThumb,
    strMeal,
    strMealThumb,
    idMeal,
    idDrink } = recipe;
  const title = strDrink || strMeal;
  const thumb = strDrinkThumb || strMealThumb;
  const id = idMeal || idDrink;
  const path = idMeal ? `/comidas/${id}` : `/bebidas/${id}`;

  return (
    <div>
      <Link to={ path }>
        <div
          data-testid={ `${index}-recomendation-card` }
        >
          <img
            src={ thumb }
            alt={ title }
          />
          <h4 data-testid={ `${index}-recomendation-title` }>
            { title }
          </h4>
        </div>

      </Link>
    </div>
  );
}

RecomendationCard.propTypes = {
  recipe: PropTypes.shape(PropTypes.any).isRequired,
  index: PropTypes.number.isRequired,
};
