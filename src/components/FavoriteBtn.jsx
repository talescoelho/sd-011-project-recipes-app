import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import whiteHeart from '../images/whiteHeartIcon.svg';
import blackHeart from '../images/blackHeartIcon.svg';
import { bookMarkRecipe } from '../services/RecipesLocalStorage';

export default function FavoriteBtn() {
  const [bookmarked, setBookmarked] = useState();

  const recipe = useSelector((state) => state.recipes);
  const { cards } = recipe;
  const { params: { id } } = useRouteMatch();

  const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
  const card = favoriteRecipes.find((el) => el.id === id);
  const favoriteImg = card && card.image ? blackHeart : whiteHeart;

  const handleBookMark = () => {
    bookMarkRecipe(cards);
    setBookmarked(!bookmarked);
  };

  useEffect(() => {}, [bookmarked]);

  return (
    <Button
      variant="danger"
      className="btnheader"
      type="button"
      data-testid="favorite-btn"
      onClick={ handleBookMark }
    >
      <img data-testid="favorite-btn" src={ favoriteImg } alt="favorite" />
    </Button>
  );
}
