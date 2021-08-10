import React from 'react';
import Header from '../components/Header';
import LocalStorageButtons from '../components/LocalStorageButtons';

function DoneRecipes() {
  return (
    <div>
      <Header title="Receitas Feitas" />
      <LocalStorageButtons doneRecipes />
    </div>
  );
}

export default DoneRecipes;
