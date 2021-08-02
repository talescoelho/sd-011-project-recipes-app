import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MainRecipes from '../components/MainRecipes';

function Foods() {
  return (
    <div>
      <Header title="Comidas" searchButton />
      <MainRecipes foodOrDrink="Comidas" />
      <Footer />
    </div>
  );
}

export default Foods;
