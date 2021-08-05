import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Profile() {
  return (
    <>
      <Header withSearch={ false } pageTitle="Perfil" />
      <main>
        <h1>Conteúdo da tela de Perfil</h1>
      </main>
      <Footer />
    </>
  );
}

export default Profile;
