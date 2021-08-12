import React, { useEffect, useState } from 'react';
import BaseActionButton from './BaseActionButton';
import { useLocalStorage } from '../../../hooks';

const NOT_FOUND_INDEX = -1;
function FavoriteButton({ recipe, callback }) {
  const { id } = recipe;
  const {
    addFavoriteRecipe,
    getFavoriteRecipes,
    removeFavoriteRecipe,
  } = useLocalStorage();
  const [isFavorite, setIsFavorite] = useState();
  useEffect(() => {
    const index = getFavoriteRecipes().findIndex((recipes) => recipes.id === id);
    setIsFavorite(index !== NOT_FOUND_INDEX);
  }, [id, getFavoriteRecipes]);

  return (
    <BaseActionButton
      reverse={ isFavorite }
      action="favorite"
      onClick={ () => {
        if (isFavorite) {
          removeFavoriteRecipe(id);
        } else {
          addFavoriteRecipe(recipe);
        }
        setIsFavorite((prevIsFavorite) => !prevIsFavorite);
        callback();
      } }
    />
  );
}

FavoriteButton.defaultProps = {
  callback: () => {},
};

{/* <ActionButton
                    action="favorite"
                    reverse={ isFavorite }
                    onClick={ () => {
                      const storedFavoriteRecipes = localStorage
                        .getItem('favoriteRecipes');
                      const parsedFavoriteRecipes = storedFavoriteRecipes
                        ? JSON.parse(storedFavoriteRecipes)
                        : [];

                      let favoriteRecipesToStore;

                      if (isFavorite) {
                        favoriteRecipesToStore = parsedFavoriteRecipes
                          .filter((parsedRecipe) => parsedRecipe.id !== id);
                      } else {
                        favoriteRecipesToStore = [...parsedFavoriteRecipes, {
                          id,
                          type: 'comida',
                          area: recipe.strArea,
                          category: recipe.strCategory,
                          alcoholicOrNot: '',
                          name: recipe.strMeal,
                          image: recipe.strMealThumb,
                        }];
                      }

                      localStorage.setItem(
                        'favoriteRecipes',
                        JSON.stringify(favoriteRecipesToStore),
                      );

                      setIsFavorite((previously) => !previously);
                    } }
                  /> */}

export default FavoriteButton;
