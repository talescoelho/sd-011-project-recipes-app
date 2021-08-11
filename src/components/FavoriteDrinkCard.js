import React from 'react';
import { Link } from 'react-router-dom';

import DetailsFavoriteButton from './details/DetailsFavoriteButton';
import DetailsShareMeals from './details/DetailsShareMeals';

function FavoriteDrinkCard() {
  //  // info da receita favoritada
  const srcImage = 'import da imagem'; // recebe da receita favoritada
  const typeDrink = 'Alcoholic/Not alcoholic'; // recebe da receita favoritada
  const titleRecipe = 'Titulo da Receita(DRINK)'; // recebe da receita favoritada
  const detailsLink = '#'; // recebe da receita favoritada

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
          <DetailsShareMeals />

          <DetailsFavoriteButton />
        </div>

      </div>
    </div>
  );
}

export default FavoriteDrinkCard;
