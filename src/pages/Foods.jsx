import React from 'react';
import Header from '../components/Header';

export default function Foods() {
  const name = 'Comidas';
  const showSearchButton = true;
  return (
    <div>
      <Header pageName={ name } showSearchButton={ showSearchButton } />
      Comidas
    </div>
  );
}
