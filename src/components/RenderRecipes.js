import React from 'react';
import PropTypes from 'prop-types';

export default function RenderRecipes({ title, index, srcImage }) {
  // const { typeRecipes, nameRecipes } = props;
  return (
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
  );
}

RenderRecipes.propTypes = {
  title: PropTypes.string,
  index: PropTypes.number,
  srcImage: PropTypes.string,
}.isRequired;
