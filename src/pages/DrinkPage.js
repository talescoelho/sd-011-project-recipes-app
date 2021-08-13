import React from 'react';
import HeaderDrink from '../components/HeaderDrink';
import CardRecipeList from '../components/CardRecipeList';
import Footer from '../components/Footer';
import NavCategories from '../components/NavCategories';

function drinkPage(props) {
  const { ingredient } = props.location.state;
  return (
    <div>
      <HeaderDrink title="Bebidas" search />
      <NavCategories origin="Drink" />
      <CardRecipeList origin="Drink" text={ ingredient } />
      <Footer />
    </div>
  );
}

export default drinkPage;
