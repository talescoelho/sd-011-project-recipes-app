import React from 'react';
import PropTypes from 'prop-types';
import '../styles/IngredientsCard.css';

export default function IngredientsCard({ ingredient, handleClick }) {
  const { name, index, api } = ingredient;
  const thumbnail = api === 'meals'
    ? `https://www.themealdb.com/images/ingredients/${name}-Small.png`
    : `https://www.thecocktaildb.com/images/ingredients/${name}-Small.png`;

  return (
    <div
      onClick={ () => handleClick(name) }
      onKeyDown={ () => null }
      data-testid={ `${index}-ingredient-card` }
      className='ingredient-card'
    >
      <img data-testid={ `${index}-card-img` } src={ thumbnail } alt="Ingredient" />
      <h6 data-testid={ `${index}-card-name` }>{ name }</h6>
    </div>
  );

}

IngredientsCard.propTypes = {
  ingredient: PropTypes.objectOf({}).isRequired,
  name: PropTypes.string.isRequired,
  index: PropTypes.string.isRequired,
};
