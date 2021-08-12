import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Profile() {
  const userEmail = JSON.parse(localStorage.getItem('user'));

  return (
    <div>
      <Header title="Perfil" />
      <span data-testid="profile-email">{userEmail.email}</span>
      <button
        type="submit"
        data-testid="profile-done-btn"
      >
        <Link to="/receitas-feitas">Receitas Feitas</Link>
      </button>
      <button
        type="submit"
        data-testid="profile-favorite-btn"
      >
        <Link to="/receitas-favoritas">Receitas Favoritas</Link>
      </button>
      <button
        type="submit"
        data-testid="profile-logout-btn"
        onClick={ () => localStorage.clear() }
      >
        <Link to="/">Sair</Link>
      </button>
      <Footer />
    </div>
  );
}

export default Profile;
