import React from 'react';
import PropTypes from 'prop-types';

export default function Cards({ name, thumb, index }) {
  return (
    <>
      <p data-testid={ `${index}-card-name` }>{ name }</p>
      <img
        data-testid={ `${index}-card-img` }
        src={ thumb }
        alt={ name }
      />
    </>
  );
}

Cards.propTypes = {
  name: PropTypes.string,
  thumb: PropTypes.string,
  index: PropTypes.index,
}.isRequired;
