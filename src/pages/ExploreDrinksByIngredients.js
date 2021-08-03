import React from 'react';
import LowerMenu from '../components/LowerMenu';
import Header from '../components/Header';

export default function ExploreDrinksByIngredients() {
  return (
    <div>
      <Header title="Explorar Ingredientes" renderButton />
      <LowerMenu />
    </div>
  );
}
