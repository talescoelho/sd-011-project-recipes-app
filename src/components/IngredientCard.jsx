import React from 'react';
import '../styles/IngredientCard.css';
import PropTypes, { string } from 'prop-types';

import MealsCard from './MealsCard';
import CocktailCard from './CocktailCard';

function IngredientCard({ recipeType, ingredient, index }) {
  const pathname = '/explorar/comidas/ingredientes';
  return (
    <div>
      {
        recipeType === pathname
          ? (
            <MealsCard
              ingredient={ ingredient }
              index={ index }
            />
          )
          : (
            <CocktailCard
              ingredient={ ingredient }
              index={ index }
            />
          )
      }
    </div>
  );
}

export default IngredientCard;

IngredientCard.propTypes = {
  recipeType: PropTypes.objectOf(String),
  ingredient: PropTypes.objectOf(string),
  index: PropTypes.number,
}.isRequired;
