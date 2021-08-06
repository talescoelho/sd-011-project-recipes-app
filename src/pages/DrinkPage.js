import React from 'react';
import Header from '../components/Header';
import CardRecipeList from '../components/CardRecipeList';
import Footer from '../components/Footer';

function drinkPage() {
  return (
    <div>
      <Header title="Bebidas" search />
      <CardRecipeList />
      <Footer />
    </div>
  );
}

export default drinkPage;
