import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ExploreFoodOrDrink from '../components/ExploreFoodOrDrink';

function ExploreDrinks() {
  return (
    <div>
      <Header title="Explorar Bebidas" />
      <ExploreFoodOrDrink foodOrDrink="Bebidas" />
      <Footer />
    </div>
  );
}

export default ExploreDrinks;
