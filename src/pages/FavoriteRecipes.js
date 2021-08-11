import React, { useState } from 'react';
import clipboardCopy from 'clipboard-copy';
import { Link } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';

// import FavoriteFoodCard from '../components/FavoriteFoodCard';
// import FavoriteDrinkCard from '../components/FavoriteDrinkCard';
import Header from '../components/Header';
import DetailsFavoriteButton from '../components/details/DetailsFavoriteButton';
import DetailsDrinkFavoriteButton from '../components/details/detailsDrink/DetailsDrinkFavoriteButton';

export default function FavoriteReciples() {

  const pageTitle = {
    pageName: 'Receitas Favoritas',
    setIcon: false,
  };
  const favoritedRecipes = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
  const [favoriteRecipes, setfavoriteRecipes] = useState(favoritedRecipes);
  const [filteredRecipes, setfilteredRecipes] = useState([]);
  const [copied, setCopied] = useState(false);
  console.log(favoriteRecipes);

  function renderfavoriteRecipes() {
    if (filteredRecipes.length === 0) {
      return (

        favoriteRecipes.map((recipe, index) => (
          <div key={ index }>
            {recipe.type === 'bebida' ? (
              <div>
                <Link
                  to={ `/bebidas/${recipe.id}` }
                >
                  <img
                    src={ recipe.image }
                    alt={ recipe.name }
                    data-testid={ `${index}-horizontal-image` }
                  />
                </Link>
                <Link to={ `/bebidas/${recipe.id}` }>
                  <h3 data-testid={ `${index}-horizontal-name` }>{recipe.name}</h3>
                </Link>
                <p
                  data-testid={ `${index}-horizontal-top-text` }
                >
                  {recipe.alcoholicOrNot}
                </p>
                <button
                  type="button"
                  onClick={ () => {
                    clipboardCopy(`http://localhost:3000/bebidas/${recipe.id}`);
                    setCopied(true);
                  } }
                >
                  {copied ? <span>Link copiado!</span> : <img
                    src={ shareIcon }
                    alt="compartilhar"
                    data-testid={ `${index}-horizontal-share-btn` }
                  />}
                </button>
                <DetailsDrinkFavoriteButton id={ recipe.id }/>
              </div>
            ) : (
              <div key={ index }>
                <Link
                  to={ `/comidas/${recipe.id}` }
                >
                  <img
                    src={ recipe.image }
                    alt={ recipe.name }
                    data-testid={ `${index}-horizontal-image` }
                  />
                </Link>
                <Link to={ `/comidas/${recipe.id}` }>
                  <h3 data-testid={ `${index}-horizontal-name` }>{recipe.name}</h3>
                </Link>
                <p
                  data-testid={ `${index}-horizontal-top-text` }
                >
                  {`${recipe.area} - ${recipe.category}`}
                </p>
                <button
                  type="button"
                  onClick={ () => {
                    clipboardCopy(`http://localhost:3000/comidas/${recipe.id}`);
                    setCopied(true);
                  } }
                >
                  {copied ? <span>Link copiado!</span> : <img
                    src={ shareIcon }
                    alt="compartilhar"
                    data-testid={ `${index}-horizontal-share-btn` }
                  />}
                </button>
                <DetailsFavoriteButton id={ recipe.id } />

              </div>
            )}
          </div>
        ))

      );
    } else {
      return (
        filteredRecipes.map((recipe, index) => (
          <div key={ index }>
            {recipe.type === 'bebida' ? (
              <div>
                <Link
                  to={ `/bebidas/${recipe.id}` }
                >
                  <img
                    src={ recipe.image }
                    alt={ recipe.name }
                    data-testid={ `${index}-horizontal-image` }
                  />
                </Link>
                <Link to={ `/bebidas/${recipe.id}` }>
                  <h3 data-testid={ `${index}-horizontal-name` }>{recipe.name}</h3>
                </Link>
                <p
                  data-testid={ `${index}-horizontal-top-text` }
                >
                  {recipe.alcoholicOrNot}
                </p>
                <button
                  type="button"
                  onClick={ () => {
                    clipboardCopy(`http://localhost:3000/bebidas/${recipe.id}`);
                    setCopied(true);
                  } }
                >
                  {copied ? <span>Link copiado!</span> : <img
                    src={ shareIcon }
                    alt="compartilhar"
                    data-testid={ `${index}-horizontal-share-btn` }
                  />}
                </button>
                <DetailsDrinkFavoriteButton id={ recipe.id } />

              </div>
            ) : (
              <div key={ index }>
                <Link
                  to={ `/comidas/${recipe.id}` }
                >
                  <img
                    src={ recipe.image }
                    alt={ recipe.name }
                    data-testid={ `${index}-horizontal-image` }
                  />
                </Link>
                <Link to={ `/comidas/${recipe.id}` }>
                  <h3 data-testid={ `${index}-horizontal-name` }>{recipe.name}</h3>
                </Link>
                <p
                  data-testid={ `${index}-horizontal-top-text` }
                >
                  {`${recipe.area} - ${recipe.category}`}
                </p>
                <button
                  type="button"
                  onClick={ () => {
                    clipboardCopy(`http://localhost:3000/comidas/${recipe.id}`);
                    setCopied(true);
                  } }
                >
                  {copied ? <span>Link copiado!</span> : <img
                    src={ shareIcon }
                    alt="compartilhar"
                    data-testid={ `${index}-horizontal-share-btn` }
                  />}
                </button>
                <DetailsFavoriteButton id={ recipe.id } />
              </div>
            )}
          </div>
        ))

      );
    }
  }

  return (
    <div>
      { console.log(filteredRecipes) }
      <Header value={pageTitle} />
      <div>
        <button
          type="button"
          data-testid="filter-by-all-btn"
          onClick={ () => setfilteredRecipes(favoritedRecipes) }
        >
          All
        </button>
        <button
          type="button"
          data-testid="filter-by-food-btn"
          onClick={() => setfilteredRecipes(favoritedRecipes
            .filter((recipes) => recipes.type === 'comida'))}
        >
          Food
        </button>
        <button
          type="button"
          data-testid="filter-by-drink-btn"
          onClick={() => setfilteredRecipes(favoritedRecipes
            .filter((recipes) => recipes.type === 'bebida'))}
        >
          Drinks
        </button>
      </div>
      <div>
        { renderfavoriteRecipes() }
      </div>
    </div>
  );
}
