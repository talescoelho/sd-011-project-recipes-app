import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Perfil() {
  const [userEmail, setUserEmail] = useState('');
  useEffect(() => {
    const email = JSON.parse(localStorage.getItem('user'));
    console.log(email);
    setUserEmail(email);
  }, []);

  return (
    <div>
      <h1>Pagina de  Perfil</h1>
      <Header title="Perfil" />
      <p data-testid="profile-email">{userEmail}</p>
      <Link to="/receitas-feitas">
        <button
          type="button"
          data-testid="profile-done-btn"
        >
          Receitas Feitas
        </button>
      </Link>

      <Link to="/receitas-favoritas">
        <button
          type="button"
          data-testid="profile-favorite-btn"
        >
          Receitas Favoritas
        </button>
      </Link>

      <Link to="/">
        <button
          type="button"
          data-testid="profile-logout-btn"
          onClick={ () => localStorage.clear() }
        >
          Sair
        </button>
      </Link>
      <Footer />
    </div>
  );
}

export default Perfil;
