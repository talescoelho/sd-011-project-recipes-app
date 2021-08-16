import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Profile() {
  return (
    <>
      <Header withSearch={ false } pageTitle="Perfil" />
      <main>
        <h1>Perfil</h1>
        <br />
        <span data-testid="profile-email"> email aqui </span>
        <br />
        <br />
        <br />
        <button
          data-testid="profile-done-btn"
          aria-label="Botão de Receitas feitas"
          type="button"
        >
          Receitas Feitas
        </button>
        <br />
        <button
          data-testid="profile-favorite-btn"
          aria-label="Botão de Receitas favoritas"
          type="button"
        >
          Receitas Favoritas
        </button>
        <br />
        <button
          data-testid="profile-logout-btn"
          aria-label="Botão de sair"
          type="button"
        >
          Sair
        </button>
        <br />
      </main>
      <Footer />
    </>
  );
}

export default Profile;
