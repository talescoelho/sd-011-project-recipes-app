import PropTypes from 'prop-types';
import React from 'react';
import Footer from '../../globalComponents/Footer';
import Header from '../../globalComponents/Header';

function Explore({ match }) {
  return (
    <>
      <Header title="Explorar" match={ match } />
      <div>
        Explore
      </div>
      <Footer />
    </>
  );
}

Explore.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default Explore;
