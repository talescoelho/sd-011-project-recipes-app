import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';

function Bebidas({ title }) {
  return (
    <div>
      <Header title={ title } />
    </div>
  );
}

export default Bebidas;

Bebidas.propTypes = {
  title: PropTypes.string.isRequired,
};
