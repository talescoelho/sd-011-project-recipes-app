import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { useLocalStorageState } from 'use-local-storage-state';
import { produce } from 'immer';
import whiteHeart from '../images/whiteHeartIcon.svg';
import blackHeart from '../images/blackHeartIcon.svg';
import { favoriteRefactored } from '../services/RecipesLocalStorage';

export default function FavoriteBtn() {
  const [bookmarked, setBookmarked] = useState();
  const [favoriteRecipes, setFavorites] = useLocalStorageState('favoriteRecipes', []);

  const recipe = useSelector((state) => state.recipes);
  const { singleFood } = recipe;
  const { params: { id } } = useRouteMatch();

  const favoriteImg = () => ((favoriteRecipes.some((el) => el.id === id)) ? blackHeart
    : whiteHeart);

  const handleBookMark = () => {
    const magic1 = -1;
    const updatedFavorite = produce(favoriteRecipes, (draft) => {
      const index = draft.findIndex((el) => el.id === id);
      if (index > magic1) {
        draft.splice(index, 1);
      } else {
        draft.push(favoriteRefactored(singleFood));
      }
      return draft;
    });
    setFavorites(updatedFavorite);
  };

  useEffect(() => {
    if (favoriteRecipes && favoriteRecipes.some((el) => el.id === id)) {
      setBookmarked(true);
    }
  }, [bookmarked, favoriteRecipes, id]);

  return (
    <Button
      variant="danger"
      className="btnheader"
      type="button"
      onClick={ handleBookMark }
    >
      <img data-testid="favorite-btn" src={ favoriteImg() } alt="favorite" />
    </Button>
  );
}
