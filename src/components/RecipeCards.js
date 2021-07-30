import PropTypes from 'prop-types';
import React from 'react';

function RecipeCards({ index, src, name }) {
  return (
    <div data-testid={ `${index}-recipe-card` }>
      <img src={ src } alt={ name } data-testid={ `${index}-card-img` } width="30px" />
      <p data-testid={ `${index}-card-name` }>{name}</p>
    </div>
  );
}

RecipeCards.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default RecipeCards;
