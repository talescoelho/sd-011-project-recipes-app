import React from 'react';
import Header from '../components/Header';
import RenderRecipes from '../components/RenderRecipes';

export default function Drinks() {
  return (
    <main>
      <Header title="Bebidas" haveSearchBtn searchTrigger="thecocktaildb" />
      <RenderRecipes />
    </main>
  );
}
