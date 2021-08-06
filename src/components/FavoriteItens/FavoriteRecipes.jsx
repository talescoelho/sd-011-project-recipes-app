import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import '../../styles/FavoriteRecipes.css';
import FavoriteRecipeCard from './FavoriteRecipeCard';

function FavoriteRecipes({ filterBy }) {
  const parsedLocalStorage = JSON.parse(localStorage.getItem('favoriteRecipes'));
  const [favoriteRecipes, setFavoriteRecipes] = useState(parsedLocalStorage);
  const [isEmpty, setIsEmpty] = useState('');
  const [newRender, setNewRender] = useState(true);

  useEffect(() => {
    setFavoriteRecipes(parsedLocalStorage);
    if (favoriteRecipes.length === 0) {
      setIsEmpty(true);
    }
  }, []);

  useEffect(() => {
    if (favoriteRecipes[0] !== '') {
      return setIsEmpty(false);
    }
    setIsEmpty(true);
  }, [favoriteRecipes]);

  useEffect(() => {
    if (filterBy === 'All') setFavoriteRecipes(parsedLocalStorage);
    if (filterBy === 'Foods') {
      setFavoriteRecipes(favoriteRecipes.filter((recipe) => recipe.type === 'comida'));
    }
    if (filterBy === 'Drinks') {
      setFavoriteRecipes(favoriteRecipes.filter((recipe) => recipe.type === 'bebida'));
    }
  }, [filterBy]);

  return (
    <div className="FavoriteRecipesContainer">
      {
        isEmpty ? 'Lista vazia' : favoriteRecipes.map(
          (recipe, index) => (
            <FavoriteRecipeCard
              key={ index }
              index={ index }
              recipe={ recipe }
              newRender={ setNewRender }
            />
          ),
        )
      }
    </div>
  );
}

FavoriteRecipes.propTypes = {
  filterBy: PropTypes.func.isRequired,
};

export default FavoriteRecipes;
