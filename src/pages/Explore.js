import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Explore() {
  return (
    <div>
      <h1>My Explore Page</h1>
      <Header title="Explorar" />

      <button type="button" data-testid="explore-food">Explorar Comidas</button>
      <br />
      <button type="button" data-testid="explore-drinks">Explorar Bebidas</button>

      <Footer />
    </div>
  );
}

export default Explore;
