import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Profile() {
  const [email, setEmail] = useState('');
  useEffect(() => {
    const emailFromLocal = JSON.parse(localStorage.getItem('user'));
    if (localStorage.user) {
      setEmail(emailFromLocal);
    }
  }, []);
  return (
    <main>
      <Header title="Perfil" disable />
      <p data-testid="profile-email">{email.email}</p>
      <Link to="/receitas-feitas">
        <button type="button" data-testid="profile-done-btn">Receitas Feitas</button>
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
          onClick={ () => localStorage.clear() }
          data-testid="profile-logout-btn"
        >
          Sair
        </button>
      </Link>
      <Footer />
    </main>
  );
}
