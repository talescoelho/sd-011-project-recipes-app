import React from 'react';
import Footer from '../components/Footer';

function Recipes() {
  return (
    <>
      <header>
        <h1 data-testid="page-title">Tela Principal de Receitas</h1>
        <button type="button" data-testid="profile-top-btn">Profile</button>
        <button type="button" data-testid="search-top-btn">Search</button>
      </header>
      <main data-testid="recipes-page">
        <h1>Tela Principal de Receitas</h1>
      </main>
      <Footer />
    </>
  );
}

export default Recipes;
