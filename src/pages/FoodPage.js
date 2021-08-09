import React from 'react';
import Header from '../components/Header';
import CardRecipeList from '../components/CardRecipeList';
import Footer from '../components/Footer';
import NavCategories from '../components/NavCategories';

function foodPage() {
  return (
    <div>
      <Header title="Comidas" search />
      <NavCategories />
      <CardRecipeList />
      <Footer />
    </div>
  );
}

export default foodPage;
