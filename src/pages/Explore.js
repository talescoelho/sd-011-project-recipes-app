import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Explore() {
  return (
    <>
      <Header withSearch={ false } pageTitle="Explorar" />
      <br />
      <main>
        <section data-testid="explore-food">
          <h1>Comidas</h1>
        </section>
        <section data-testid="explore-drinks">
          <h1>Bebidas</h1>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Explore;
