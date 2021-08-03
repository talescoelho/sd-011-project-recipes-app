import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ExploreFoodOrDrink from '../components/ExploreFoodOrDrink';

function ExploreFoods() {
  return (
    <div>
      <Header title="Explorar Comidas" />
      <ExploreFoodOrDrink foodOrDrink="Comidas" />
      <Footer />
    </div>
  );
}

export default ExploreFoods;
