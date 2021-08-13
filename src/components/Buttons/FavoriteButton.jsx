import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import propTypes from 'prop-types';
import { updateFavorites } from '../../Redux/reducers/user';
import blackHeart from '../../images/blackHeartIcon.svg';
import useLSHook from '../Hooks/useLSHook';

export default function FavoriteBtn({ id, index }) {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.user.favoriteRecipes);
  const [favoriteRecipes, setFavoriteRecipes] = useLSHook();

  useEffect(() => { }, [favoriteRecipes]);

  const handleBookMark = () => {
    const newState = recipes.filter((el) => el.id !== id);
    dispatch(updateFavorites(newState));
    setFavoriteRecipes(newState);
  };

  return (
    <button
      className="favorite-btn"
      type="button"
      onClick={ handleBookMark }
    >
      <img
        data-testid={ `${index}-horizontal-favorite-btn` }
        src={ blackHeart }
        alt="favorite"
      />
    </button>
  );
}

FavoriteBtn.propTypes = {
  id: propTypes.number.isRequired,
  index: propTypes.number.isRequired,
};
