import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import copy from 'clipboard-copy';
import shareIcon from '../images/shareIcon.svg';
import profileIcon from '../images/profileIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

function FavoriteRecipes() {
  const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
  const [favorite, setFavorite] = useState(favoriteRecipes);
  const [copyUrl, setCopyUrl] = useState('');

  const filterFavoriteRecipes = (type) => {
    if (type === 'all') {
      setFavorite(favoriteRecipes);
    } else {
      const filterResult = favoriteRecipes.filter((item) => item.type === type);
      setFavorite(filterResult);
    }
  };

  const copyLink = ({ type, id }) => {
    copy(`http://localhost:3000/${type}s/${id}`);
    setCopyUrl('Link copiado!');
    setInterval(() => setCopyUrl(''), '2000');
  };

  return (
    <>
      <Link to="/perfil">
        <img src={ profileIcon } alt="user" />
      </Link>
      <h1>Receitas Favoritas</h1>
      <span>{ copyUrl }</span>
      <button
        type="button"
        data-testid="filter-by-all-btn"
        onClick={ () => filterFavoriteRecipes('all') }
      >
        All
      </button>
      <button
        type="button"
        data-testid="filter-by-food-btn"
        onClick={ () => filterFavoriteRecipes('comida') }
      >
        Food
      </button>
      <button
        type="button"
        data-testid="filter-by-drink-btn"
        onClick={ () => filterFavoriteRecipes('bebida') }
      >
        Drinks
      </button>
      {
        favorite ? favorite.map((item, index) => {
          if (item.type === 'comida') {
            return (
              <section key={ index }>
                <img
                  width="200px"
                  data-testid={ `${index}-horizontal-image` }
                  alt={ `recipe ${item.name}` }
                  src={ item.image }
                />
                <span
                  data-testid={ `${index}-horizontal-top-text` }
                >
                  { `${item.area} - ${item.category}` }
                </span>
                <span data-testid={ `${index}-horizontal-name` }>{ item.name }</span>
                <button
                  type="button"
                  onClick={ () => copyLink(item) }
                >
                  <img
                    data-testid={ `${index}-horizontal-share-btn` }
                    alt="share"
                    src={ shareIcon }
                  />
                </button>
                <button
                  type="button"
                  // onClick={ handleClickFavorites }
                >
                  <img
                    data-testid={ `${index}-horizontal-favorite-btn` }
                    src={ blackHeartIcon }
                    alt="favorite"
                  />
                </button>
              </section>
            );
          }
          return (
            <section key={ index }>
              <img
                width="200px"
                data-testid={ `${index}-horizontal-image` }
                alt={ `recipe ${item.name}` }
                src={ item.image }
              />
              <span
                data-testid={ `${index}-horizontal-top-text` }
              >
                { item.category }
              </span>
              <span data-testid={ `${index}-horizontal-name` }>{ item.name }</span>
              <button
                type="button"
                onClick={ () => copyLink(item) }
              >
                <img
                  data-testid={ `${index}-horizontal-share-btn` }
                  alt="share"
                  src={ shareIcon }
                />
              </button>
              <button
                type="button"
                // onClick={ handleClickFavorites }
              >
                <img
                  data-testid={ `${index}-horizontal-favorite-btn` }
                  src={ blackHeartIcon }
                  alt="favorite"
                />
              </button>
            </section>
          );
        }) : ''
      }
    </>
  );
}

export default FavoriteRecipes;
