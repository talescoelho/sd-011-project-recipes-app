import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import ExploreFoodsButtons from '../components/ExploreFoodsButtons';

function ExplorarComidas({ title }) {
  return (
    <div>
      <Header title={ title } />
      <ExploreFoodsButtons />
    </div>
  );
}

export default ExplorarComidas;

ExplorarComidas.propTypes = {
  title: PropTypes.string.isRequired,
};
