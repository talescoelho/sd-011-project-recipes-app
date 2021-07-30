import PropTypes from 'prop-types';
import React from 'react';
import Footer from '../../globalComponents/Footer';
import Header from '../../globalComponents/Header';

function Foods({ match }) {
  return (
    <>
      <Header title="Comidas" glass="true" match={ match } />
      <div>
        Foods
      </div>
      <Footer />
    </>
  );
}

Foods.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default Foods;
