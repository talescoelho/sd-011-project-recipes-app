import React from 'react';
import Explore from '../components/Explore';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ExplorarComidas() {
  return (
    <div>
      <Header title="Explorar Comidas" />
      <Explore localOrigin mealOrDrink="comidas" />
      <Footer />
    </div>

export default ExplorarComidas;
