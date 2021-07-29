import React from 'react';
import Header from '../components/Header';

export default function DoneRecipes() {
  const name = 'Receitas Feitas';
  return (
    <div>
      <Header pageName={ name } />
      Receitas prontas
    </div>
  );
}
