import PropTypes from 'prop-types';
import React from 'react';
import Header from '../../globalComponents/Header';

function RecipesMade({ match }) {
  return (
    <>
      <Header title="Receitas Feitas" match={ match } />
      <div>
        Recipes Made
      </div>
    </>
  );
}

RecipesMade.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default RecipesMade;
