import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import ExploreButtons from '../components/ExploreButtons';

function ExplorarComidas({ title }) {
  return (
    <div>
      <Header title={ title } />
      <ExploreButtons />
    </div>
  );
}

export default ExplorarComidas;

ExplorarComidas.propTypes = {
  title: PropTypes.string.isRequired,
};
