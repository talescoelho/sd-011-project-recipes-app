import React from 'react';
import PropTypes from 'prop-types';

export default function Instructions(props) {
  const { instructions } = props;
  return (
    <section>
      <h3>Instruções</h3>
      <p data-testid="instructions">{ instructions }</p>
    </section>
  );
}

Instructions.propTypes = {
  instructions: PropTypes.string,
}.isRequired;
