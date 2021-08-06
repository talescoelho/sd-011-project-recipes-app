import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Perfil() {
  let userEmail = '';
  if (localStorage.user) {
    userEmail = JSON.parse(localStorage.user);
  }
  const history = useHistory();
  const redirectToDone = () => history.push('/receitas-feitas');
  const redirectToFavorites = () => history.push('/receitas-favoritas');
  const redirecToLogin = () => {
    localStorage.clear();
    history.push('/');
  };
  return (
    <div>
      <Header title="Perfil" searchIcon />
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
        onClick={ redirecToLogin }
      >
        Sair
      </button>
      <Footer />
    </div>
  );
}
