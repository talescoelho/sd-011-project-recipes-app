import React from 'react';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Bebidas() {
  return (
    <div>
      <Header title="Bebidas" />
      <Cards ApiCallMeals={ false } ApiCallCockTails />
      <Footer />
    </div>
  );
}

export default Bebidas;
