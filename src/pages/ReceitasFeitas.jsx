import React from 'react';
import Header from '../components/Header';
import TypeOfRecipesConcludeds from '../components/TypeOfRecipesConcludeds';
import DoneRecipes from '../components/DoneRecipes';

import '../styles/ReceitasFeitas.css';

function ReceitasFeitas() {
  return (
    <div className="ReceitasFeitasContainer">
      <Header title="Receitas Feitas" />
      <TypeOfRecipesConcludeds />
      <DoneRecipes />
    </div>
  );
}

export default ReceitasFeitas;
