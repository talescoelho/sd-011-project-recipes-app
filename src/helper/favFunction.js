import React from 'react';
import { Link } from 'react-router-dom';
import ShareButton from '../components/ShareButton';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

export default function renderFaveRecipes(item, index) {
  const localFav = localStorage.getItem('favoriteRecipes');
  const favRec = JSON.parse(localFav);
  console.log(favRec);
  const hasId = localFav && Object.keys(favRec)
    .map((el) => favRec[el].id).some((x) => x === item.id);

  // console.log(hasId);
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
        // onClick={ () => handleFavorite() }
        src={ hasId ? blackHeartIcon : whiteHeartIcon } // repetido --> teste
        data-testid={ `${index}-horizontal-favorite-btn` }
      >
        <img
          data-testid="favorite-btn"
          src={ hasId ? blackHeartIcon : whiteHeartIcon }
          alt="Imagem do ícone de favorito"
        />
      </button>
      {/* <FavoriteButton
        index={ index }
        foodOrDrink={ item.type === 'comida' ? 'comidas' : 'bebidas' }
        id={ item.id }
        type={ item.type }
      /> */}
      {item.tags && item.tags
        .map((_, i) => (
          <p key={ i } data-testid={ `${index}-${item.tags[i]}-horizontal-tag` }>
            {item.tags[i]}
          </p>))}
    </div>
  );
}
