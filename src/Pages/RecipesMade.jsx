import React from 'react';
import profileIcon from '../images/profileIcon.svg';
import FoodOrDrinkFilter from './Components/FoodOrDrinkFilter';

function RecipesMade() {
  const [filter, setFilter] = React.useState('all');

  return (
    <div>
      <FoodOrDrinkFilter setFilter={ setFilter } />
      <h1 data-testid="page-title">Receitas Feitas</h1>
      <img
        data-testid="profile-top-btn"
        src={ profileIcon }
        alt="Botão que direciona para a tela de perfil"
      />
    </div>
  );
}

export default RecipesMade;
