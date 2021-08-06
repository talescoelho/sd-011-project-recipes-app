import React from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import imageHeart from '../images/whiteHeartIcon.svg';
import { bookMarkRecipe } from '../services/RecipesLocalStorage';

export default function FavoriteBtn() {
  const { id } = useParams();

  return (
    <Button
      variant="danger"
      className="btnheader"
      type="button"
      data-testid="favorite-btn"
      onClick={ () => bookMarkRecipe(id) }
    >
      <img data-testid="favorite-btn" src={ imageHeart } alt="favorite" />
    </Button>
  );
}
