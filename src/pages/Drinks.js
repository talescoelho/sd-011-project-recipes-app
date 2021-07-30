import React from 'react';
import Header from '../components/Header';
import RecipeCards from '../components/RecipeCards';

function Drinks() {
  return (
    <div>
      <Header title="Bebidas" icon drinks />
      <RecipeCards />
    </div>
  );
}

export default Drinks;
