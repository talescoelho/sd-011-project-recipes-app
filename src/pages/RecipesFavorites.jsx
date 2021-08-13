import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import profileIcon from '../images/profileIcon.svg';
import ShareButton from '../components/ShareButton';
import FavoriteButton from '../components/FavoriteButton';

export default function RecipesFavorites() {
  const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
  const [filteredRecipie, setFilter] = useState(favoriteRecipes);

  function changeFilter(typeButton) {
    switch (typeButton) {
    case 'all':
      setFilter(favoriteRecipes);
      break;
    default:
      setFilter(favoriteRecipes.filter((e) => e.type === typeButton));
      break;
    }
  }
  return (
    <div>
      <header>
        <input
          type="image"
          data-testid="profile-top-btn"
          src={ profileIcon }
          alt="icone de perfil"
        />
        <h1 data-testid="page-title">Receitas Favoritas</h1>
      </header>
      <Button
        type="radio"
        name="type"
        variant="dark"
        value={ 0 }
        onClick={ (event) => changeFilter(event.target.value) }
      >
        <Button
          name="type"
          data-testid="filter-by-all-btn"
          value="all"
          variant="light"
          size="lg"
        >
          All
        </Button>
        <Button
          name="type"
          data-testid="filter-by-food-btn"
          value="comida"
          variant="light"
          size="lg"
        >
          Food
        </Button>
        <Button
          name="type"
          data-testid="filter-by-drink-btn"
          value="bebida"
          variant="light"
          size="lg"
        >
          Drink
        </Button>
      </Button>
      <section className="recipies">
        {favoriteRecipes && filteredRecipie.map((recipe, index) => (
          <button
            type="button"
            className={ recipe.type }
            key={ recipe.name }
            // onClick={ () => clickDetails(meal.idMeal) }
          >
            <div data-testid={ `${index}-recipe-card` }>
              <Link to={ `/${recipe.type}s/${recipe.id}` }>
                <img
                  src={ recipe.image }
                  width="150"
                  height="100"
                  alt="imagem da refeição"
                  data-testid={ `${index}-horizontal-image` }
                />
              </Link>
              {recipe.type === 'comida' ? (
                <p data-testid={ `${index}-horizontal-top-text` }>
                  { `${recipe.area} - ${recipe.category}` }
                </p>)
                : (
                  <p data-testid={ `${index}-horizontal-top-text` }>
                    { `${recipe.alcoholicOrNot} - ${recipe.category}` }
                  </p>)}
              <Link to={ `/${recipe.type}s/${recipe.id}` }>
                <p data-testid={ `${index}-horizontal-name` }>{ recipe.name }</p>
              </Link>
              <ShareButton
                test={ `${index}-horizontal-share-btn` }
                URL={ `/comidas/${recipe.id}` }
              />
              <FavoriteButton
                test={ `${index}-horizontal-favorite-btn` }
                data={ {
                  id: recipe.id,
                  type: recipe.type,
                  area: recipe.area,
                  category: recipe.category,
                  alcoholicOrNot: recipe.alcoholicOrNot,
                  name: recipe.name,
                  image: recipe.image,
                } }
              />
            </div>
          </button>
        ))}
      </section>
    </div>
  );
}
