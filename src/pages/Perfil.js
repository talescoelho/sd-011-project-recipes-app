import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Perfil() {
  const userEmail = JSON.parse(localStorage.user);
  console.log(userEmail.email);
  const history = useHistory();
  const redirectToDone = () => history.push('/receitas-feitas');
  const redirectToFavorites = () => history.push('/receitas-favoritas');
  return (
    <div>
      <Header title="Perfil" search={ false } />
      <h2 data-testid="profile-email">{ userEmail.email }</h2>
      <button
        type="button"
        data-testid="profile-done-btn"
        onClick={ redirectToDone }
      >
        Receitas Feitas
      </button>
      <button
        type="button"
        data-testid="profile-favorite-btn"
        onClick={ redirectToFavorites }
      >
        Receitas Favoritas
      </button>
      <button
        type="button"
        data-testid="profile-logout-btn"
      >
        Sair
      </button>
      <Footer />
    </div>
  );
}
