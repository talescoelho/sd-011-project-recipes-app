import React from 'react';
import Header from '../../components/Header';

const MadeRecipes = () => {
  document.title = 'Receitas Feitas';
  return (
    <div>
      <Header />
      Sou página de receitas feitas.
    </div>
  );
};

export default MadeRecipes;
