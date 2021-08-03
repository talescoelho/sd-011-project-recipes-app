import React from 'react';

function Perfil() {
  return (
    <>
      <h2 data-testid="page-title">Perfil</h2>
      <span data-testid="profile-email">Email</span>
      <button type="button" data-testid="profile-done-btn">Receitas Feitas</button>
      <button type="button" data-testid="profile-favorite-btn">Receitas Favoritas</button>
      <button type="button" data-testid="profile-logout-btn">Sair</button>
    </>
  );
}

export default Perfil;
