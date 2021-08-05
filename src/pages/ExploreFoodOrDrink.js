import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import Header from '../components/Header';

function ExploreFoodOrDrink({ history }) {
  function exploreFood() {
    return (
      <>
        <Header withSearch={ false } pageTitle="Explorar Comidas" />
        <main data-testid="recipes-page">
          <h1>Tela de Explorar Comidas</h1>
          <section data-testid="explore-by-ingredient">
            <h1>Por Ingredientes</h1>
          </section>
          <section data-testid="explore-by-area">
            <h1>Por Local de Origem</h1>
          </section>
          <section data-testid="explore-surprise">
            <h1>Me Surpreenda!</h1>
          </section>
        </main>

      </>
    );
  }

  function exploreDrinks() {
    return (
      <>
        <Header withSearch={ false } pageTitle="Explorar Bebidas" />
        <main data-testid="recipes-page">
          <h1>Tela de Explorar Bebidas</h1>
          <section>
            <section data-testid="explore-by-ingredient">
              <h1>Por Ingredientes</h1>
            </section>
            <section data-testid="explore-surprise">
              <h1>Me Surpreenda!</h1>
            </section>
          </section>
        </main>
      </>
    );
  }

  return (
    <>
      {history.location.pathname === '/explorar/comidas' && exploreFood()}
      {history.location.pathname === '/explorar/bebidas' && exploreDrinks()}
      <Footer />
    </>
  );
}

ExploreFoodOrDrink.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }),
  }),
}.isRequired;

export default ExploreFoodOrDrink;
