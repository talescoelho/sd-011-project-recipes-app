import React from 'react';
import Header from '../components/Header';

function FavoriteRecipes() {
  return (
    <>
      <Header withSearch={ false } pageTitle="Receitas Favoritas" />
      <br />
      <main>
        <h1>Conteúdo da tela de Receitas Favoritas</h1>
      </main>
    </>
  );
}

export default FavoriteRecipes;
