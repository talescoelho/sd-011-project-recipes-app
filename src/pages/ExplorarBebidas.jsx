import React from 'react';
import Explore from '../components/Explore';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ExplorarBebidas() {
  return (
    <div>
      <Header title="Explorar Bebidas" />
      <Explore mealOrDrink="bebidas" />
      <Footer />
    </div>

export default ExplorarBebidas;
