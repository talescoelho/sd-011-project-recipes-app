import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Recipes({ history }) {
  function comidasHeaderAndMain() {
    return (
      <>
        <Header withSearch pageTitle="Comidas" />
        <br />
        <main data-testid="recipes-page">
          <h1>Algo para conteúdo de COMIDAS</h1>
          &nbsp;  &nbsp;  &nbsp;
        </main>
      </>
    );
  }

  function bebidasHeaderAndMain() {
    return (
      <>
        <Header withSearch pageTitle="Bebidas" />
        <br />
        <main data-testid="recipes-page">
          <h1>Algo para conteúdo de BEBIDAS</h1>
          &nbsp;  &nbsp;  &nbsp;
        </main>
      </>
    );
  }

  return (
    <>
      {history.location.pathname === '/comidas'
        ? comidasHeaderAndMain() : bebidasHeaderAndMain() }
      <Footer />
    </>
  );
}

Recipes.propTypes = {
  history: PropTypes.shape({
    pathname: PropTypes.string,
  }),
}.isRequired;

export default Recipes;
