import React from 'react';
import Header from '../components/Header';
import RecipeCards from '../components/RecipeCards';

function Foods() {
  return (
    <div>
      <Header title="Comidas" icon foods />
      <RecipeCards />
    </div>
  );
}

export default Foods;
