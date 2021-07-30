import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Comidas() {
  return (
    <div>
      <Header buttonExists title="Comidas" mealOrDrink="meal" />
      <Footer />
    </div>
  );
}

export default Comidas;
