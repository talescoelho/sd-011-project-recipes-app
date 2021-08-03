import React from 'react';

function Perfil() {
  const emailUser = localStorage.getItem('user');
  return (
    <>
      <h2 data-testid="page-title">Perfil</h2>
      <span data-testid="profile-email">{`Email${emailUser}`}</span>
      <button type="button" data-testid="profile-done-btn">Receitas Feitas</button>
      <button type="button" data-testid="profile-favorite-btn">Receitas Favoritas</button>
      <button type="button" data-testid="profile-logout-btn">Sair</button>
    </>
  );
}

export default Perfil;
