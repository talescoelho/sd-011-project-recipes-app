import React from 'react';
import Header from '../components/Header';

function Perfil() {
  const headerProps = {
    title: 'Perfil',
    enableSearchButton: true,
    enableProfileButton: true,
  };
  return (
    <div>
      <Header props={ headerProps } />
    </div>
  );
}

export default Perfil;
