import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import whiteHeartIcon from '../../../images/whiteHeartIcon.svg';
import blackHeartIcon from '../../../images/blackHeartIcon.svg';
import { handleFavoriteRecipe } from '../../../actions';

export default function FavoriteButton({
  recipeId,
  selector,
  details,
}) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [favoriteSrc, setFavoriteSrc] = useState(whiteHeartIcon);
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  const [area, setArea] = useState('');
  const [alcoholic, setAlcoholic] = useState('');
  const [type, setType] = useState('');

  const favorites = useSelector((state) => state.recipes.favorites);
  const dispatch = useDispatch();

  useEffect(() => {
    if (selector === 'meal') {
      const {
        idMeal,
        strMeal,
        strCategory,
        strMealThumb,
        strArea,
      } = details;
      setId(idMeal);
      setName(strMeal);
      setCategory(strCategory);
      setImage(strMealThumb);
      setArea(strArea);
      setType('comida');
    } else {
      const {
        idDrink,
        strDrink,
        strCategory,
        strDrinkThumb,
        strArea,
        strAlcoholic,
      } = details;
      setId(idDrink);
      setName(strDrink);
      setCategory(strCategory);
      setImage(strDrinkThumb);
      setArea(strArea);
      setAlcoholic(strAlcoholic);
      setType('bebida');
    }
  }, [details, selector]);

  useEffect(() => {
    favorites.forEach((obj) => {
      if (obj.id.includes(recipeId)) {
        setIsFavorite(true);
        setFavoriteSrc(blackHeartIcon);
      }
    });
  }, [recipeId]);

  const handleFavoriteBtn = () => {
    setIsFavorite(!isFavorite);
    const obj = {
      id,
      type,
      area: area || '',
      category,
      alcoholicOrNot: alcoholic,
      name,
      image,
    };
    if (favoriteSrc === whiteHeartIcon) {
      setFavoriteSrc(blackHeartIcon);
      const newFavorite = [...favorites, obj];
      dispatch(handleFavoriteRecipe(newFavorite));
    } else {
      setFavoriteSrc(whiteHeartIcon);
      const filteredFavoriteRecipes = favorites
        .filter((el) => el.id !== obj.id);
      dispatch(handleFavoriteRecipe([...filteredFavoriteRecipes]));
    }
  };

  return (
    <Button
      variant="danger"
      type="button"
      className="rounded-circle p-2"
      data-testid="favorite-btn"
      onClick={ handleFavoriteBtn }
      src={ favoriteSrc }
    >
      { isFavorite
        ? <img alt="Botão de favoritar receita" src={ blackHeartIcon } />
        : <img alt="Botão de favoritar receita" src={ whiteHeartIcon } />}
    </Button>
  );
}

FavoriteButton.propTypes = {
  recipeId: PropTypes.string.isRequired,
  selector: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  isRecipeFavorite: PropTypes.bool.isRequired,
  details: PropTypes.shape({
    idMeal: PropTypes.string,
    strMeal: PropTypes.string,
    strCategory: PropTypes.string,
    strMealThumb: PropTypes.string,
    strArea: PropTypes.string,
    idDrink: PropTypes.string,
    strDrink: PropTypes.string,
    strDrinkThumb: PropTypes.string,
    strAlcoholic: PropTypes.string,
  }).isRequired,
};
