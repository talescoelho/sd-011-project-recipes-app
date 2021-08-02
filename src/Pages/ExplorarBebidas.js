import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import ExploreDrinksButtons from '../components/ExploreDrinksButtons';

function ExplorarBebidas({ title }) {
  return (
    <div>
      <Header title={ title } />
      <ExploreDrinksButtons />
    </div>
  );
}

export default ExplorarBebidas;

ExplorarBebidas.propTypes = {
  title: PropTypes.string.isRequired,
};
