import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import LowerMenu from '../components/LowerMenu';
import '../styles/profile.css';

function Profile() {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem('user'));

  function getEmail() {
    return (
      <p type="text" data-testid="profile-email">
        {user.email}
      </p>
    );
  }
  return (
    <>
      <div className="rf">
        <Header title="Perfil" />
        {user && getEmail()}
        <button
          type="button"
          data-testid="profile-done-btn"
          onClick={ () => history.push('/receitas-feitas') }
        >
          Receitas Feitas
        </button>
        <button
          type="button"
          data-testid="profile-favorite-btn"
          onClick={ () => history.push('/receitas-favoritas') }
        >
          Receitas Favoritas
        </button>
        <button
          type="button"
          data-testid="profile-logout-btn"
          onClick={ () => {
            localStorage.clear();
            history.push('/');
          } }
        >
          Sair
        </button>
      </div>
      <LowerMenu />
    </>
  );
}

export default Profile;
