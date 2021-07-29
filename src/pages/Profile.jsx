import React from 'react';
import Header from '../components/Header';

export default function Profile() {
  const name = 'Perfil';
  const showSearchButton = false;
  return (
    <div>
      <Header pageName={ name } showSearchButton={ showSearchButton } />
      Perfil
    </div>
  );
}
