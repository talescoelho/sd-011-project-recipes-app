import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Cards(props) {
  const [source, setSource] = useState();
  const [recipeName, setRecipeName] = useState();
  const { recipe, index, type } = props;

  let tipo = 'comidas';
  let shortName = 'Meal';
  if (type === 'thecocktaildb') {
    tipo = 'bebidas';
    shortName = 'Drink';
  }

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
    <Link to={ `/${tipo}/${recipe[`id${shortName}`]}` }>
      <section data-testid={ `${index}-recipe-card` }>
        <img
          src={ source }
          alt={ recipeName }
          data-testid={ `${index}-card-img` }
          width="50px"
        />
        <p
          data-testid={ `${index}-card-name` }
        >
          { recipeName }
        </p>
      </section>
    </Link>
  );
}

Cards.propTypes = {
  key: PropTypes.string,
  recipe: PropTypes.string,
}.isRequired;
