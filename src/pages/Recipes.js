import React from 'react';

function Recipes() {
  return (
    <>
      <header>
        <h1 data-testid="page-title">Tela Principal de Receitas</h1>
        <button type="button" data-testid="profile-top-btn"> Profile</button>
        <button type="button" data-testid="search-top-btn"> Search</button>
      </header>
      <main data-testid="recipes-page">
        <h2> Corpo da Tela </h2>
      </main>
    </>
  );
}

export default Recipes;
