import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import FooterMenu from '../components/FooterMenu';
import chef from '../images/chefLaranja.png';
import '../styles/profile.css';

export default function ProfilePage() {
  document.title = 'Perfil';
  const history = useHistory();
  function getItem() {
    const getUser = JSON.parse(localStorage.getItem('user'));
    return getUser.email;
  }

  function handleClickLS() {
    localStorage.clear();
    history.push('/');
  }

  return (
    <div className="body-b">
      <Header />
      <div className="b-profile d-flex f-d-column j-c-spAround  text-center">
        <div>
          <img src={ chef } alt="logo de chef de cozinha" />
        </div>
        <h2 data-testid="profile-email" className="profile-title">{getItem()}</h2>
        <button
          data-testid="profile-done-btn"
          type="button"
          className="m-1 btn fh-3 profile-btn"
          onClick={ () => history.push('/receitas-feitas') }
        >
          Receitas Feitas
        </button>
        <button
          data-testid="profile-favorite-btn"
          type="button"
          className="m-1 btn fh-3 profile-btn"
          onClick={ () => history.push('receitas-favoritas') }
        >
          Receitas Favoritas
        </button>
        <button
          data-testid="profile-logout-btn"
          onClick={ () => handleClickLS() }
          type="button"
          className="m-1 btn fh-3 profile-btn"
        >
          Sair
        </button>
      </div>
      <FooterMenu />
    </div>
  );
}
