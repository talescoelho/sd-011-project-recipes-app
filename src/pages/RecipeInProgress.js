import React from 'react';
import PropTypes from 'prop-types';

function RecipeInProgress({ history }) {
  function comidasMain() {
    return (
      <main data-testid="recipes-page">
        <h1>Conteúdo da tela de Receita em Processo de COMIDAS</h1>
        &nbsp;  &nbsp;  &nbsp;
      </main>
    );
  }

  function bebidasMain() {
    return (
      <main data-testid="recipes-page">
        <h1>Conteúdo da tela de Receita em Processo de BEBIDAS</h1>
        &nbsp;  &nbsp;  &nbsp;
      </main>
    );
  }

  return (
    <div>
      {history.location.pathname === '/explorar/comidas/ingredientes'
        ? comidasMain() : bebidasMain() }
    </div>
  );
}

RecipeInProgress.propTypes = {
  history: PropTypes.shape({
    pathname: PropTypes.string,
  }),
}.isRequired;

export default RecipeInProgress;
