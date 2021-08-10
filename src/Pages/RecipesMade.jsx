import React from 'react';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import FoodOrDrinkFilter from './Components/FoodOrDrinkFilter';
import SecondFavoriteButton from './Components/Secondary/SecondFavoriteButton';
import SecondShareButton from './Components/Secondary/SecondShareButton';

function RecipesMade() {
  const [filter, setFilter] = React.useState('all');
  const [update, setUpdate] = React.useState(false);

  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
  const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));

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
        date,
        type,
        tags },
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
            <p data-testid={ `${index}-horizontal-done-date` }>
              {date}
            </p>
            <p data-testid={ `${index}-${category}-horizontal-tag` }>
              {tags}
            </p>
            {/* <SecondFavoriteButton
              itemId={ id }
              type={ type }
              testId={ `${index}-horizontal-favorite-btn`, }
              currentItem={ favoriteRecipes[index] }
              setUpdate={ setUpdate }
              update={ update }
            /> */}
            <SecondShareButton
              itemId={ id }
              type={ type }
              testID={ `${index}-horizontal-share-btn` }
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecipesMade;
