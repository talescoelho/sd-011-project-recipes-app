import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';

function ExplorarComidas({ title }) {
  return (
    <div>
      <Header title={ title } />
    </div>
  );
}

export default ExplorarComidas;

ExplorarComidas.propTypes = {
  title: PropTypes.string.isRequired,
};
