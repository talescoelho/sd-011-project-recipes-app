import React from 'react';
import Header from '../components/Header';

function Recipes() {
  const headerProps = {
    title: 'Receitas Feitas',
    enableSearchButton: true,
    enableProfileButton: true,
  };

  return (
    <div>
      <Header props={ headerProps } />
    </div>
  );
}

export default Recipes;
