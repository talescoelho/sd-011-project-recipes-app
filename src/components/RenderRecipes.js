import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function RenderRecipes({ id, trigger, title, index, srcImage }) {
  // const { typeRecipes, nameRecipes } = props;
  return (
    <Link to={ `/${trigger}/${id}` }>
      <div
        className="card-body"
        key={ index }
        data-testid={ `${index}-recipe-card` }
      >
        <img
          src={ srcImage }
          className="cardImage"
          data-testid={ `${index}-card-img` }
          alt="logo"
        />
        <h2 data-testid={ `${index}-card-name` }>
          { title }
        </h2>
      </div>
    </Link>
  );
}

RenderRecipes.propTypes = {
  title: PropTypes.string,
  index: PropTypes.number,
  srcImage: PropTypes.string,
}.isRequired;
