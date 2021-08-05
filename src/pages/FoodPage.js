import React from 'react';
import Header from '../components/Header';
import CardRecipeList from '../components/CardRecipeList';

function foodPage() {
  return (
    <div>
      <Header title="Comidas" search />
      <CardRecipeList />
    </div>
  );
}

export default foodPage;
