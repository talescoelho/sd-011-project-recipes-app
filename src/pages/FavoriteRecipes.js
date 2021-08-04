import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import RecipeAppContext from '../context/RecipeAppContext';

const copy = require('clipboard-copy');

function FavoriteRecipes() {
  const [click, setClick] = useState(false);

  const {
    filteredFavoritesRecipes,
    setFilteredFavoritesRecipes,
    favoritesRecipes,
    setFavoritesRecipes,
  } = useContext(RecipeAppContext);

  const history = useHistory();

  function copyLink(type, id) {
    copy(`http://localhost:3000/${type}s/${id}`);
    setClick(true);
  }

  const filterRecipesDone = ({ target: { name } }) => {
    let filteredRecipes = [];
    switch (name) {
    case 'Food':
      filteredRecipes = favoritesRecipes.filter((recipe) => recipe.type === 'comida');
      break;
    case 'Drink':
      filteredRecipes = favoritesRecipes.filter((recipe) => recipe.type === 'bebida');
      break;
    default:
      filteredRecipes = favoritesRecipes;
    }
    setFilteredFavoritesRecipes(filteredRecipes);
  };

  function deleteFavoriteRecipe({ target: { id } }) {
    const newFavoriteRecipes = favoritesRecipes.filter((recipe) => recipe.id !== id);
    setFavoritesRecipes(newFavoriteRecipes);
    setFilteredFavoritesRecipes(newFavoriteRecipes);
    const favoriteRecipesJSON = JSON.stringify(newFavoriteRecipes);
    localStorage.setItem('favoriteRecipes', favoriteRecipesJSON);
    console.log(newFavoriteRecipes);
  }

  return (
    <div>
      <Header title="Receitas Favoritas" />
      <h1>My Favorite Recipes Page</h1>
      <button
        type="button"
        data-testid="filter-by-all-btn"
        name="All"
        onClick={ (e) => filterRecipesDone(e) }
      >
        All
      </button>

      <button
        type="button"
        data-testid="filter-by-food-btn"
        name="Food"
        onClick={ (e) => filterRecipesDone(e) }
      >
        Food
      </button>

      <button
        type="button"
        data-testid="filter-by-drink-btn"
        name="Drink"
        onClick={ (e) => filterRecipesDone(e) }
      >
        Drinks
      </button>

      <span>{click ? <p>Link copiado!</p> : <div />}</span>

      <span>
        {filteredFavoritesRecipes && filteredFavoritesRecipes.map((recipes, index) => (
          <div key={ index }>
            <input
              type="image"
              data-testid={ `${index}-horizontal-share-btn` }
              src={ shareIcon }
              alt="card da receita"
              onClick={ () => copyLink(recipes.type, recipes.id) }
            />
            <ul>
              <input
                type="image"
                data-testid={ `${index}-horizontal-image` }
                src={ recipes.image }
                width="50px"
                height="50px"
                alt={ recipes.name }
                onClick={ () => history.push(`/${recipes.type}s/${recipes.id}`) }
              />

              <li data-testid={ `${index}-horizontal-top-text` }>
                {`${recipes.area} - ${recipes.category} ${recipes.alcoholicOrNot}`}
              </li>

              <a
                href={ `/${recipes.type}s/${recipes.id}` }
                data-testid={ `${index}-horizontal-name` }
                onClick={ () => history.push(`/${recipes.type}s/${recipes.id}`) }
              >
                { recipes.name }
              </a>

              <br />
              <input
                type="image"
                data-testid={ `${index}-horizontal-favorite-btn` }
                src={ blackHeartIcon }
                alt={ recipes.name }
                id={ recipes.id }
                onClick={ (e) => deleteFavoriteRecipe(e) }
              />

            </ul>
          </div>
        ))}
      </span>

    </div>
  );
}

export default FavoriteRecipes;
