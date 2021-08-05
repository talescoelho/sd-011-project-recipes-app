import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

function RecipeInProgress({ history }) {
  const { id } = useParams();
  function mealsMain() {
    return (
      <main data-testid="recipes-page">
        <h1>Conteúdo da tela de Receita de COMIDAS em Processo </h1>
        &nbsp;  &nbsp;  &nbsp;
      </main>
    );
  }

  function drinksMain() {
    return (
      <main data-testid="recipes-page">
        <h1>Conteúdo da tela de Receita de BEBIDAS em Processo </h1>
        &nbsp;  &nbsp;  &nbsp;
      </main>
    );
  }

  return (
    <div>
      {history.location.pathname === `/comidas/${id}/in-progress`
        ? mealsMain() : drinksMain() }
    </div>
  );
}

RecipeInProgress.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }),
  }),
}.isRequired;

export default RecipeInProgress;
