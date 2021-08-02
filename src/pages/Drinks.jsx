import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MainRecipes from '../components/MainRecipes';

function Drinks() {
  return (
    <div>
      <Header title="Bebidas" searchButton />
      <MainRecipes foodOrDrink="Bebidas" />
      <Footer />
    </div>
  );
}

export default Drinks;
