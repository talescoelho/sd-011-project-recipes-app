import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function Cards(props) {
  const [source, setSource] = useState();
  const [recipeName, setRecipeName] = useState();
  const { recipe, index, type } = props;

  useEffect(() => {
    if (type === 'themealdb') {
      setRecipeName(recipe.strMeal);
      setSource(recipe.strMealThumb);
    }
    if (type === 'thecocktaildb') {
      setRecipeName(recipe.strDrink);
      setSource(recipe.strDrinkThumb);
    }
  }, [recipe.strDrink, recipe.strDrinkThumb, recipe.strMeal, recipe.strMealThumb, type]);

  return (
    <section data-testid={ `${index}-recipe-card` }>
      <img
        src={ source }
        alt={ recipeName }
        data-testid={ `${index}-card-img` }
      />
      <p
        data-testid={ `${index}-card-name` }
      >
        { recipeName }
      </p>
    </section>
  );
}

Cards.propTypes = {
  key: PropTypes.string,
  recipe: PropTypes.string,
}.isRequired;
