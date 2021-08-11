import React from 'react';
import Header from '../components/Header';

function favoriteRecipe() {
  return (
    <div>
      <Header title="Receitas Favoritas" search={ false } />
      Receitas favoritas
    </div>
  );
}

export default favoriteRecipe;
