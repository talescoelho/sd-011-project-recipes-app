import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

function RecipeInProgress({ history }) {
  const { id } = useParams();
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
      {history.location.pathname === `/comidas/${id}/in-progress`
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
