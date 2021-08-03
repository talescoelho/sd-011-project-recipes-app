import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

function RecipeCards({ index, src, name, idItem, comidasOuBebidas }) {
  return (
    <div
      data-testid={ `${index}-recipe-card` }
    >
      <Link to={ `/${comidasOuBebidas}/${idItem}` }>
        <img src={ src } alt={ name } data-testid={ `${index}-card-img` } width="30px" />
        <p data-testid={ `${index}-card-name` }>{ name }</p>
      </Link>
    </div>
  );
}

RecipeCards.propTypes = {
  comidasOuBebidas: PropTypes.string.isRequired,
  idItem: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default RecipeCards;
