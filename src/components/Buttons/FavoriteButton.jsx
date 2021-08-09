import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import propTypes from 'prop-types';
import blackHeart from '../../images/blackHeartIcon.svg';
import useLSHook from '../Hooks/useLSHook';

export default function FavoriteBtn({ id }) {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.user.favoriteRecipes);
  const [favoriteRecipes, setFavoriteRecipes] = useLSHook();

  useEffect(() => { }, [favoriteRecipes]);

  const handleBookMark = () => {
    const newState = recipes.filter((el) => el.id !== id);
    dispatch({ type: 'UPDATE_FAVORITE', payload: newState });
    setFavoriteRecipes(newState);
  };

  return (
    <button
      className="favorite-btn"
      type="button"
      onClick={ handleBookMark }
    >
      <img data-testid="favorite-btn" src={ blackHeart } alt="favorite" />
    </button>
  );
}

FavoriteBtn.propTypes = {
  id: propTypes.number.isRequired,
};
