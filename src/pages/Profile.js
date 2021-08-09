import React from 'react';
import Footer from '../components/footer/Footer';
import Header from '../components/Header';

export default function Profile() {
  return (
    <div>
      <Header title="Perfil" data-testid="page-title" />
      
      <Footer />
    </div>
  );
}
