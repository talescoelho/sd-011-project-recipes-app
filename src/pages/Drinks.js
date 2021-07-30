import React from 'react';
import Header from '../components/Header';

function Drinks() {
  const headerProps = {
    title: 'Bebidas',
    enableSearchButton: false,
    enableProfileButton: true,
  };

  return (
    <div>
      <Header props={ headerProps } />
    </div>
  );
}

export default Drinks;
