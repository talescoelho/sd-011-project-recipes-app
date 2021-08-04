import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import Header from '../components/Header';

function ExploreIngredients({ history }) {
  function comidasMain() {
    return (
      <main data-testid="recipes-page">
        <h1>Conteúdo da tela de Explorar Ingredientes de COMIDAS</h1>
        &nbsp;  &nbsp;  &nbsp;
      </main>
    );
  }

  function bebidasMain() {
    return (
      <main data-testid="recipes-page">
        <h1>Conteúdo da tela Explorar Ingredientes de BEBIDAS</h1>
        &nbsp;  &nbsp;  &nbsp;
      </main>
    );
  }

  return (
    <>
      <Header withSearch={ false } pageTitle="Explorar Ingredientes" />
      <br />
      {history.location.pathname === '/explorar/comidas/ingredientes'
        ? comidasMain() : bebidasMain() }
      <Footer />
    </>
  );
}

ExploreIngredients.propTypes = {
  history: PropTypes.shape({
    pathname: PropTypes.string,
  }),
}.isRequired;

export default ExploreIngredients;
