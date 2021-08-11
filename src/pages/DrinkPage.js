import React from 'react';
import Header from '../components/Header';
import CardRecipeList from '../components/CardRecipeList';
import Footer from '../components/Footer';
import NavCategories from '../components/NavCategories';

function drinkPage() {
  return (
    <div>
      <Header title="Bebidas" search />
      <NavCategories />
      <CardRecipeList />
      <Footer />
    </div>
  );
}

export default drinkPage;
