import React from 'react';
import Header from '../components/Header';
import LowerMenu from '../components/LowerMenu';

export default function Perfil() {
  return (
    <div>
      <Header text="Perfil" lupa={ false } />
      <LowerMenu />
    </div>
  );
}
