import React from 'react';
import { Link } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

function FavoriteDrinkCard() {
  //  // info da receita favoritada
  const srcImage = 'import da imagem'; // recebe da receita favoritada
  const typeDrink = 'Alcoholic/Not alcoholic'; // recebe da receita favoritada
  const titleRecipe = 'Titulo da Receita(DRINK)'; // recebe da receita favoritada
  const detailsLink = '#'; // recebe da receita favoritada

  function copyUrl() {
    // copiar url do detalhes da receita para o clipboard
    alert('Link copiado');
    console.log('copiar url do detalhes da receita para o clipboard');
  }

  function disfavor() {
    // funcao para desfavoritar receita eremover ela do localStorage e da tela
    alert('Receita desfavoritada(deve desaparecer da tela e do localStorage)');
    console.log('Receita desfavoritada(deve desaparecer da tela e do localStorage)');
  }

  return (
    <div
      className="favorite-recipe-cards"
    >
      <div className="image-recipe-card">
        <Link to={ detailsLink }>
          <img src={ srcImage } alt="DRINKImage" />
        </Link>
      </div>
      <div className="description-recipe-card">

        <span>{typeDrink}</span>

        <Link to={ detailsLink }>
          <h2>{titleRecipe}</h2>
        </Link>

        <div className="buttons-recipe-card">
          <button
            type="button"
            onClick={ () => copyUrl() }
          >
            <img src={ shareIcon } alt="share" />
          </button>

          <button
            type="button"
            onClick={ () => disfavor() }
          >
            <img src={ blackHeartIcon } alt="disfavor" />
          </button>
        </div>

      </div>
    </div>
  );
}

export default FavoriteDrinkCard;
