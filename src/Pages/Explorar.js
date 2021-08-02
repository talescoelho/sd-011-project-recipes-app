import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import RedirectExploreFoodsAndDrinks from '../components/RedirectExploreFoodsAndDrinks';

function Explorar({ title }) {
  return (
    <div>
      <Header title={ title } />
      <RedirectExploreFoodsAndDrinks />
    </div>
  );
}

export default Explorar;

Explorar.propTypes = {
  title: PropTypes.string.isRequired,
};
