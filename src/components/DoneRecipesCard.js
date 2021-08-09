import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function DoneRecipesCard({ recipe, index }) {
  const { strDrink,
    strDrinkThumb,
    strMeal,
    strMealThumb,
    idMeal,
    idDrink,
    strCategory,
    strAlcoholic } = recipe;
  const title = strDrink || strMeal;
  const thumb = strDrinkThumb || strMealThumb;
  const id = idMeal || idDrink;
  const path = idMeal ? `/comidas/${id}` : `/bebidas/${id}`;
  const category = idMeal ? strCategory : strAlcoholic;
  return (
    <section>
      <div>
        <Link to={ path }>
          <img
            src={ thumb }
            alt={ title }
            data-testid={ `${index}-horizontal-image` }
          />
        </Link>
      </div>
      <div
        data-testid={ `${index}-recipe-card` }
      >

        <h5
          data-testid={ `${index}-horizontal-top-text` }
        >
          { category }
        </h5>
        <h4
          data-testid={ `${index}-horizontal-name` }
        >
          { title }
        </h4>
        <p
          data-testid={ `${index}-horizontal-done-date` }
        >
          Feita em
          { Donedate }
        </p>
        <div
          data-testid={ `${index}-horizontal-share-btn` }
        >
          <ShareButton link={ window.location.href } />
        </div>
        <div
          data-testid={ `${index}-${tagName}-horizontal-tag` }
        />
      </div>

    </section>

  );
}

export default DoneRecipesCard;

DoneRecipesCard.propTypes = {
  recipe: PropTypes.shape(PropTypes.any).isRequired,
  index: PropTypes.number.isRequired,
};
