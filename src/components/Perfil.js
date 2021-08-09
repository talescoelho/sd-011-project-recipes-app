import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from './Header';
import MenuInferior from './MenuInferior';

function Perfil() {
  const emailUser = JSON.parse(localStorage.getItem('user'));
  const history = useHistory();

  const logout = () => {
    localStorage.clear();
    history.push('/');
  };

  return (
    <>
      <Header />
      <h2 data-testid="page-title">Perfil</h2>
      <span data-testid="profile-email">{`Email: ${emailUser.email}`}</span>
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
        onClick={ logout }
      >
        Sair
      </button>
      <MenuInferior />
    </>
  );
}

export default Perfil;
