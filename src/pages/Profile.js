import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Profile() {
  const email = Object.values(JSON.parse(localStorage.getItem('user')))[0];
  console.log(email)
  return (
    <main>
      <Header haveSearchBtn={ false } title="Perfil" />
      <div>
        <p data-testid="profile-email">{ email }</p>
      </div>
      <div>
        <button type="button" data-testid="profile-done-btn">
          Receitas Feitas
        </button>
        <button type="button" data-testid="profile-favorite-btn">
          Receitas Favoritas
        </button>
        <button type="button" data-testid="profile-logout-btn">
          Sair
        </button>
      </div>
      <Footer />
    </main>
  );
}
