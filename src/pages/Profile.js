import React from 'react';
import Header from '../components/Header';

function Profile() {
  return (
    <>
      <Header withSearch={ false } pageTitle="Perfil" />
      <br />
      <main>
        <h1>Conteúdo da tela de Perfil</h1>
      </main>
    </>
  );
}

export default Profile;
