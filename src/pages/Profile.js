import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Profile() {
  return (
    <div>
      <Header title="Perfil" search={ false } />
      Página de perfil
      <Footer />
    </div>
  );
}
