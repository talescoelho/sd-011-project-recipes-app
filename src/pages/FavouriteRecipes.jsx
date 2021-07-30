import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function FavouriteRecipes() {
  const name = 'Receitas Favoritas';
  return (
    <div>
      <Header pageName={ name } />
      Receitas Favoritas
      <Footer />
    </div>
  );
}
