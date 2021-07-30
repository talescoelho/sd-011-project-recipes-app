import React from 'react';
import Header from '../components/Header';
import RecipeCards from '../components/RecipeCards';
import Footer from '../components/Footer';

function Foods() {
  return (
    <div>
      <Header title="Comidas" icon foods />
      <RecipeCards />
      <Footer />
    </div>
  );
}

export default Foods;
