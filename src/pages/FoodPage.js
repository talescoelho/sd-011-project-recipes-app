import React from 'react';
import Header from '../components/Header';
import CardRecipeList from '../components/CardRecipeList';
import Footer from '../components/Footer';

function foodPage() {
  return (
    <div>
      <Header title="Comidas" search />
      <CardRecipeList />
      <Footer />
    </div>
  );
}

export default foodPage;
