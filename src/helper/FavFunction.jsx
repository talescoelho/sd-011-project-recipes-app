import React from 'react';
import { Link } from 'react-router-dom';
import ShareButton from '../components/ShareButton';
import blackHeartIcon from '../images/blackHeartIcon.svg';

export default function RenderFaveRecipes(item, index) {
  function handleFavorite(e) {
    const newLocalFav = localStorage.getItem('favoriteRecipes');
    const newFavRec = JSON.parse(newLocalFav);
    const newArray = newFavRec.filter((el) => el.id !== e.currentTarget.value);
    localStorage.setItem('favoriteRecipes', JSON.stringify(newArray));
  }

  return (
    <div key={ index }>
      <Link
        to={
          item.type === 'comida'
            ? `/comidas/${item.id}`
            : `/bebidas/${item.id}`
        }
      >
        <img
          className="visible"
          data-testid={ `${index}-horizontal-image` }
          alt="image_of_recipe"
          src={ item.image }
          // Timed out retrying: cy.click() failed because the center of this element is hidden from view: -> https://docs.cypress.io/guides/core-concepts/interacting-with-elements#Visibility
        />
      </Link>
      <h3 data-testid={ `${index}-horizontal-top-text` }>
        {item.type === 'comida'
          ? `${item.area} - ${item.category}` : item.alcoholicOrNot}
      </h3>
      <Link
        to={
          item.type === 'comida'
            ? `/comidas/${item.id}`
            : `/bebidas/${item.id}`
        }
      >
        <h2 data-testid={ `${index}-horizontal-name` }>
          {item.name}
        </h2>
      </Link>
      <ShareButton
        index={ index }
        foodOrDrinkBtn={ item.type === 'comida' ? 'comidas' : 'bebidas' }
        id={ item.id }
      />
      <button
        type="button"
        value={ item.id }
        onClick={ (e) => handleFavorite(e) }
        src={ blackHeartIcon } // repetido --> teste
        data-testid={ `${index}-horizontal-favorite-btn` }
      >
        <img
          data-testid="favorite-btn"
          src={ blackHeartIcon }
          alt="Imagem do ícone de favorito"
        />
      </button>
      {item.tags && item.tags
        .map((_, i) => (
          <p key={ i } data-testid={ `${index}-${item.tags[i]}-horizontal-tag` }>
            {item.tags[i]}
          </p>))}
    </div>
  );
}
