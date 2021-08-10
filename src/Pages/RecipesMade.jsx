import React from 'react';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import FoodOrDrinkFilter from './Components/FoodOrDrinkFilter';

function RecipesMade() {
  const [filter, setFilter] = React.useState('all');

  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
  console.log(doneRecipes);

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
      {doneRecipes && doneRecipes.map(({
        id,
        image,
        name,
        area,
        alcoholicOrNot,
        category,
        type },
      index) => (
        <div key={ `${name}-${id}` }>
          <Link to={ `/${type}s/${id}` }>
            <img
              src={ image }
              width="150"
              data-testid={ `${index}-horizontal-image` }
              alt="Imagem de comida"
            />
          </Link>
          <div>
            <p data-testid={ `${index}-horizontal-top-text` }>
              {area !== '' ? `${area} - ${category}` : alcoholicOrNot }
            </p>
            <Link to={ `/${type}s/${id}` }>
              <p data-testid={ `${index}-horizontal-name` }>{name}</p>
            </Link>
            <p>Favorite</p>
            <p>Share</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecipesMade;
