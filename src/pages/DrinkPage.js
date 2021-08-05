import React from 'react';
import Header from '../components/Header';
import CardRecipeList from '../components/CardRecipeList';

function drinkPage() {
  return (
    <div>
      <Header title="Bebidas" search />
      <CardRecipeList />
    </div>
  );
}

export default drinkPage;
