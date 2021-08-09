import { Button } from 'bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import Header from '../components/Header';

export default function Profile() {
  const { email } = JSON.parse(localStorage.user);
  return (
    <div>
      <Header title="Perfil" data-testid="page-title" />
      <h1 data-testid="profile-email">{email}</h1>
      <Link to="/receitas-favoritas">
        <button type="button" data-testid="profile-favorite-btn">
          Receitas Feitas
        </button>
      </Link>
      <Footer />
    </div>
  );
}
