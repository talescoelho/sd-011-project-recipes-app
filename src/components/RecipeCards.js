import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

function RecipeCards({ index, src, name, idItem, comidasOuBebidas }) {
  return (
    <div className="col-5 col-xl-4 recipe-card">
      <Link
        to={ `/${comidasOuBebidas}/${idItem}` }
        data-testid={ `${index}-recipe-card` }
      >
        <img
          src={ src }
          alt={ name }
          data-testid={ `${index}-card-img` }
          width="80%"
        />
      </Link>
      <p
        className="recipe-name font-weight-bolder text-decoration-none"
        data-testid={ `${index}-card-name` }
      >
        {name}
      </p>
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
