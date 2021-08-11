import React from 'react';
import { Link } from 'react-router-dom';

import DetailsShareMeals from './details/DetailsShareMeals';
import DetailsFavoriteButton from './details/DetailsFavoriteButton';
import DetailsMealHeader from './details/DetailsMealHeader';

function FavoriteFoodCard() {
  // // info da receita favoritada
  const categoria = 'Categoria da Receita'; // recebe da receita favoritada
  const area = 'Area da Receita'; // recebe da receita favoritada
  const titleRecipe = 'Titulo da Receita(FOOD)'; // recebe da receita favoritada
  const srcImage = 'import da imagem'; // recebe da receita favoritada
  const detailsLink = '#'; // recebe da receita favoritada

  return (
    <div
      className="favorite-recipe-cards"
    >
      <div className="image-recipe-card">
        {/* <DetailsMealHeader /> */}
        <Link to={ detailsLink }>
          <img
            src={ srcImage }
            alt="FOODImage"
            data-testid="0-horizontal-image"
          />
        </Link>
      </div>

      <div className="description-recipe-card">
        <span>
          {categoria}
          -
          {area}
        </span>
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

export default FavoriteFoodCard;
