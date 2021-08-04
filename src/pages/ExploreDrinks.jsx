import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ExploreButtons from '../components/ExploreButtons';

function ExploreDrink() {
  return (
    <>
      <Header pageName="Explorar Bebidas" />
      <main>
        <ExploreButtons type="drinks" />
      </main>
      <Footer />
    </>

  );
}

export default ExploreDrink;
