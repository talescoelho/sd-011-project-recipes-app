import React, { useState } from 'react';
import profileIcon from '../images/profileIcon.svg';
import FoodOrDrinkFilter from './Components/FoodOrDrinkFilter';

function FavoriteRecipes() {
  const [filter, setFilter] = useState('all');
  const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));

  return (
    <div>
      <h1 data-testid="page-title">Receitas Favoritas</h1>
      <img
        data-testid="profile-top-btn"
        src={ profileIcon }
        alt="Botão que direciona para a tela de perfil"
      />
      <FoodOrDrinkFilter setFilter={ setFilter } />
      <section className="favorites-recipes">
        {favoriteRecipes.map(({ image, name, area, alcoholicOrNot }, index) => (
          <div key>
            <img src={ image } width="150" data-testid={ `${index}-horizontal-image` } alt="Imagem de comida" />
            <div>
              <p data-testid={ `${index}-horizontal-top-text` }>{area !== '' ? area : alcoholicOrNot }</p>
              <p data-testid={ `${index}-horizontal-name` }>{name}</p>
              <p data-testid={ `${index}-horizontal-favorite-btn` }>Botão favoritar</p>
              <p data-testid={ `${index}-horizontal-share-btn` }>Botão compartilhar</p>
            </div>
              
          </div>
        ))}
      </section>
    </div>
  );
}

export default FavoriteRecipes;
