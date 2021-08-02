import React from 'react';
import PropTypes from 'prop-types';

export default function Cards({ name, thumb, index }) {
  return (
    <div
      data-testid={ `${index}-recipe-card` }
      className="card"
    >
      <p data-testid={ `${index}-card-name` }>{ name }</p>
      <img
        data-testid={ `${index}-card-img` }
        src={ thumb }
        alt={ name }
      />
    </div>
  );
}

Cards.propTypes = {
  name: PropTypes.string,
  thumb: PropTypes.string,
  index: PropTypes.index,
}.isRequired;
