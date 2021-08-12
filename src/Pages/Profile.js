import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Profile() {
  function userEmail() {
    return localStorage.getItem('user');
  }
  return (
    <div>
      <Header title="Perfil" />
      <span data-testid="profile-email">{ userEmail()}</span>
      {/* <input
        type="email"
        value={ userEmail.email }
        style={ { margin: 10 } }
      /> */}
      <button
        type="submit"
        data-testid="profile-done-btn"
        style={ { margin: 5 } }
      >
        <Link to="/receitas-feitas">Receitas Feitas</Link>
      </button>
      <button
        type="submit"
        data-testid="profile-favorite-btn"
        style={ { margin: 5 } }

      >
        <Link to="/receitas-favoritas">Receitas Favoritas</Link>
      </button>
      <button
        type="submit"
        data-testid="profile-logout-btn"
        onClick={ () => localStorage.clear() }
        style={ { margin: 5 } }
      >
        <Link to="/">Sair</Link>
      </button>
      <Footer />
    </div>
  );
}

export default Profile;
