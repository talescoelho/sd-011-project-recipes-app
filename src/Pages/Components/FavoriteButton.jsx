import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';

export default function FavoriteButton({ currentItem, typeOf }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const { id } = useParams();
  console.log(currentItem);
  const verdadeiro = false;

  useEffect(() => {
    const currentFavoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (!currentFavoriteRecipes) {
      localStorage.setItem('favoriteRecipes', JSON.stringify([]));
    }
  }, []);

  function toggleFavorite() {
    const currentFavoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (!currentFavoriteRecipes) {
      localStorage.setItem('favoriteRecipes', JSON.stringify([]));
    }

    if (typeOf === 'Drink' && currentFavoriteRecipes !== id) {
      console.log(currentFavoriteRecipes);
      console.log(id);
      currentFavoriteRecipes.push({
        id: currentItem.idDrink,
        type: 'Bebida',
        area: '',
        category: currentItem.strCategory,
        alcoholicOrNot: currentItem.strAlcoholic === 'Non alcoholic' || currentItem.strAlcoholic === 'Alcoholic' ? currentItem.strAlcoholic : '',
        name: currentItem.strDrink,
        image: currentItem.strDrinkThumb,
      });
    }

    if (typeOf === 'Meal') {
      currentFavoriteRecipes.push({
        id: currentItem.idMeal,
        type: 'Comida',
        area: currentItem.strArea,
        category: currentItem.strCategory,
        alcoholicOrNot: '',
        name: currentItem.strMeal,
        image: currentItem.strMealThumb,
      });
    }
    localStorage.setItem('favoriteRecipes', JSON.stringify(currentFavoriteRecipes));
  }

  return (
    <button type="button" onClick={ () => toggleFavorite() } data-testid="favorite-btn">
      <img
        src={ verdadeiro ? blackHeartIcon : whiteHeartIcon }
        alt="Botão de receita favorita"
      />
    </button>
  );
}
