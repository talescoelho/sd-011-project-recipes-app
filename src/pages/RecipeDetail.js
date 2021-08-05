import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

function RecipeDetail({ history }) {
  const { id } = useParams();
  function mealMain() {
    return (
      <main data-testid="recipes-page">
        <h1>Conteúdo da tela de DETALHES de COMIDAS</h1>
        &nbsp;  &nbsp;  &nbsp;
      </main>
    );
  }

  function drinkMain() {
    return (
      <main data-testid="recipes-page">
        <h1>Conteúdo da tela de DETALHES de BEBIDAS</h1>
        &nbsp;  &nbsp;  &nbsp;
      </main>
    );
  }

  return (
    <div>
      {history.location.pathname === `/comidas/${id}`
        ? mealMain() : drinkMain() }
    </div>
  );
}

RecipeDetail.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }),
  }),
}.isRequired;

export default RecipeDetail;
