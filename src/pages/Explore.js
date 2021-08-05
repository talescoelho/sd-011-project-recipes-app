import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Explore() {
  return (
    <>
      <Header withSearch={ false } pageTitle="Explorar" />
      <br />
      <main>
        <section>
          <button
            type="button"
            data-testid="explore-food"
          >
            Explorar Comidas
          </button>
        </section>
        <section>
          <button
            type="button"
            data-testid="explore-drinks"
          >
            Explorar Bebidas
          </button>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Explore;
