import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';

function Comidas({ title }) {
  return (
    <div>
      <Header title={ title } />
    </div>
  );
}

export default Comidas;

Comidas.propTypes = {
  title: PropTypes.string.isRequired,
};
