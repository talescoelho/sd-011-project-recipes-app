import PropTypes from 'prop-types';
import React from 'react';
import Header from '../../globalComponents/Header';

function FavoriteRecipes({ match }) {
  return (
    <>
      <Header title="Receitas Favoritas" match={ match } />
      <div>
        Receitas Favoritas
      </div>
    </>
  );
}

FavoriteRecipes.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default FavoriteRecipes;
