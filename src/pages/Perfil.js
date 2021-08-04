import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Perfil() {
  const userEmail = JSON.parse(localStorage.user);
  console.log(userEmail.email);
  return (
    <div>
      <Header title="Perfil" search={ false } />
      <h2 data-testid="profile-email">{ userEmail.email }</h2>
      <button type="button" data-testid="profile-done-btn">Receitas Feitas</button>
      <button type="button" data-testid="profile-favorite-btn">Receitas Favoritas</button>
      <button type="button" data-testid="profile-logout-btn">Sair</button>
      <Footer />
    </div>
  );
}
