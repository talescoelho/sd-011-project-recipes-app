import React from 'react';
import FooterMenu from '../components/FooterMenu';
import Header from '../components/Header';

export default function Profile() {
  const pageTitle = {
    pageName: 'Perfil',
    setIcon: false,
  };
  const user = JSON.parse(localStorage.getItem('user'));
  return (
    <div>
      <Header value={ pageTitle } />
      <div>
        <h3 data-testid="profile-email">
          { user !== null ? user.email : 'email' }
        </h3>
        <button
          type="button"
          data-testid="profile-done-btn"
        >
          Recitas Favoritas
        </button>
        <button
          type="button"
          data-testid="profile-favorite-btn"
        >
          Recitas Favoritas
        </button>
        <button
          type="button"
          data-testid="profile-logout-btn"
        >
          Sair
        </button>
      </div>
      <FooterMenu />
    </div>
  );
}
