import React from 'react';
import Footer from '../components/footer/Footer';
import Header from '../components/Header';

export default function Profile() {
  const { email } = JSON.parse(localStorage.user);
  return (
    <div>
      <Header title="Perfil" data-testid="page-title" />
      <h1>{email}</h1>
      <Footer />
    </div>
  );
}
