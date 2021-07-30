import React from 'react';
import Header from '../components/Header';
import RecipeCards from '../components/RecipeCards';
import Footer from '../components/Footer';

function Drinks() {
  return (
    <div>
      <Header title="Bebidas" icon drinks />
      <RecipeCards />
      <Footer />
    </div>
  );
}

export default Drinks;
