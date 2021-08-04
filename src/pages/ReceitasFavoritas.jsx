import React, { useState } from 'react';
import FavoriteRecipes from '../components/FavoriteRecipes';
import Header from '../components/Header';
import TypeOfRecipesConcludeds from '../components/TypeOfRecipesConcludeds';
// import DoneRecipes from '../components/DoneRecipes';

import '../styles/ReceitasFeitas.css';

function ReceitasFeitas() {
  const [filterByCategory, setFilterByCategory] = useState('All');
  return (
    <div className="ReceitasFavoritasContainer">
      <Header title="Receitas Favoritas" />
      <TypeOfRecipesConcludeds filterByCategory={ setFilterByCategory } />
      <FavoriteRecipes filterBy={ filterByCategory } />
    </div>
  );
}

export default ReceitasFeitas;
