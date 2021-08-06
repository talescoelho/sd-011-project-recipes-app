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
          <section>
            <button
              type="button"
              data-testid="explore-by-ingredient"
            >
              Por Ingredientes
            </button>
          </section>
          <section>
            <button
              type="button"
              data-testid="explore-by-area"
            >
              Por Local de Origem
            </button>
          </section>
          <section>
            <button
              type="button"
              data-testid="explore-surprise"
            >
              Me Surpreenda!
            </button>
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
            <button
              type="button"
              onClick={ () => history.push('/explorar/bebidas/ingredientes') }
              data-testid="explore-by-ingredient"
            >
              Por Ingredientes
            </button>
          </section>
          <section>
            <button
              type="button"
              onClick={ () => history.push('/explorar/bebidas') }
              data-testid="explore-surprise"
            >
              Me Surpreenda!
            </button>
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
