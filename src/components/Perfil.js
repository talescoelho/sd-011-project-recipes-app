import React from 'react';
import { useHistory } from 'react-router-dom';

function Perfil() {
  const emailUser = localStorage.getItem('user');
  const history = useHistory();

  // const redirectDone = () => history.push('/');

  return (
    <>
      <h2 data-testid="page-title">Perfil</h2>
      <span data-testid="profile-email">{`Email: ${emailUser}`}</span>
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
      <button type="button" data-testid="profile-logout-btn">Sair</button>
    </>
  );
}

export default Perfil;
