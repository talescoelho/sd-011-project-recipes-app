import React from 'react';
import Header from '../components/Header';
import LocalStorageButtons from '../components/LocalStorageButtons';

function FavoriteRecipes() {
  return (
    <div>
      <Header title="Receitas Favoritas" />
      <LocalStorageButtons />
    </div>
  );
}

export default FavoriteRecipes;
