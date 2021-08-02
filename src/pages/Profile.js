import React from 'react';
import LowerMenu from '../components/LowerMenu';
import Header from '../components/Header';

export default function Profile() {
  return (
    <div>
      <Header title="Perfil" renderButton />
      <LowerMenu />
    </div>
  );
}
