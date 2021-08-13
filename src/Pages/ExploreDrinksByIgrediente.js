import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { fetchIngredientesListDrink } from '../Services/Data';
import CardsExplore from '../components/CardsExplore';

function ExploreDrinksByIgrediente() {
  const [ingredientesListDrink, setIngredientesListDrink] = useState([]);

  const renderCards = () => (<CardsExplore
    ingredientesList={ ingredientesListDrink }
    drink
  />);

  const getDataButton = () => {
    fetchIngredientesListDrink(setIngredientesListDrink);
    console.log(ingredientesListDrink);
  };

  useEffect(getDataButton, []);

  return (
    <div>
      <Header title="Explorar Ingredientes" />
      {renderCards()}
      <Footer />
    </div>
  );
}

export default ExploreDrinksByIgrediente;
