import React from 'react';
import profileIcon from '../images/profileIcon.svg';
import FoodOrDrinkFilter from './Components/FoodOrDrinkFilter';

function RecipesMade() {
  const [filter, setFilter] = React.useState('all');

  // const doneRecipes = localStorage.getItem('doneRecipes');;

  return (
    <div>
      <section>
        <h1 data-testid="page-title">Receitas Feitas</h1>
        <img
          data-testid="profile-top-btn"
          src={ profileIcon }
          alt="Botão que direciona para a tela de perfil"
        />
      </section>
      <FoodOrDrinkFilter setFilter={ setFilter } />

    </div>
  );
}

export default RecipesMade;
