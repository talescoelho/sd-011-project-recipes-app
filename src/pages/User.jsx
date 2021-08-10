import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/User.css';

export default function User() {
  const getEmail = JSON.parse(localStorage.getItem('user'));

  const exitButton = () => {
    localStorage.clear();
  };

  return (
    <>
      <Header pageName="Perfil" />
      <div className="userButtons">
        <p>
          E-mail:
          {' '}
          <span data-testid="profile-email">{ getEmail ? getEmail.email : 'ghost' }</span>
        </p>
        <Link to="/receitas-feitas">
          <Button
            variant="success"
            className="m-2 user-btn"
            data-testid="profile-done-btn"
            type="button"
          >
            Receitas Feitas

          </Button>
        </Link>
        <Link to="/receitas-favoritas">
          <Button
            variant="warning"
            className="m-2 user-btn"
            data-testid="profile-favorite-btn"
            type="button"
          >
            Receitas Favoritas
          </Button>
        </Link>
        <Link className="exit-btn" to="/">
          <Button
            className="m-2 user-btn"
            variant="danger"
            data-testid="profile-logout-btn"
            type="button"
            onClick={ exitButton }
          >
            Sair
          </Button>
        </Link>
      </div>
      <Footer />
    </>
  );
}
