import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import React from 'react';
import Footer from '../../globalComponents/Footer';
import Header from '../../globalComponents/Header';

function Foods({ match }) {
  const { Filter: { isLoading, data } } = useSelector((state) => state);
  console.log(isLoading, data);
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
