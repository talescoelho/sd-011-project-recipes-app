import React from 'react';
import Header from '../components/Header';
import RenderRecipes from '../components/RenderRecipes';

export default function Foods() {
  return (
    <main>
      <Header title="Comidas" haveSearchBtn searchTrigger="themealdb" />
      <RenderRecipes recipes="meal" />
    </main>
  );
}
