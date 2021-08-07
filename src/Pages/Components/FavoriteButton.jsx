import React from 'react';
import { useParams } from 'react-router-dom';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';

export default function FavoriteButton() {
  const verdadeiro = false;
  // const currentFavoriteItems = localStorage.getItem();
  const { id } = useParams();
  return (
    <button type="button" data-testid="favorite-btn">
      <img src={ verdadeiro ? blackHeartIcon : whiteHeartIcon } alt="Botão de receita favorita" />
    </button>
  );
}
