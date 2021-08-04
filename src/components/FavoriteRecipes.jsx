import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import '../styles/FavoriteRecipes.css';
import RecipeConcluded from './RecipeConcluded';

function FavoriteRecipes({ filterBy }) {
  localStorage.setItem('favoriteRecipes', JSON.stringify([]));
  const parsedLocalStorage = JSON.parse(localStorage.getItem('favoriteRecipes'));
  const obj2 = {
    id: 9999,
    type: 'bebida',
    area: '',
    category: '',
    alcoholicOrNot: 'alcoholic',
    name: 'Cachaça',
    image: 'https://picsum.photos/160/140',
  };
  const obj = {
    id: 1234,
    type: 'comida',
    area: 'Brazil',
    category: 'breakfast',
    alcoholicOrNot: '',
    name: 'X TUDO',
    image: 'https://picsum.photos/160/140',
  };
  localStorage.setItem('favoriteRecipes', JSON.stringify([...parsedLocalStorage, obj]));
  const parsedLocalStorage2 = JSON.parse(localStorage.getItem('doneRecipes'));
  localStorage.setItem('favoriteRecipes', JSON.stringify([...parsedLocalStorage2, obj2]));
  const favoriteReceitas = JSON.parse(localStorage.getItem('favoriteRecipes'));
  const [favoriteItens, setFavoriteItens] = useState(favoriteReceitas);

  useEffect(() => {
    // ESTÁ BUGADO POIS NÃO ESTOU PEGANDO O DONE RECIPES DO CONTEXT AINDA PRECISA PEGAR OS DONE RECIPES DE LÁ PARA FILTRAR!
    if (filterBy === 'All') setFavoriteItens(favoriteReceitas);
    if (filterBy === 'Foods') {
      setFavoriteItens(favoriteItens.filter((recipe) => recipe.type === 'comida'));
    }
    if (filterBy === 'Drinks') {
      setFavoriteItens(favoriteItens.filter((recipe) => recipe.type === 'bebida'));
    }
  }, [filterBy]);
  return (
    <div className="FavoriteRecipesContainer">
      {
        favoriteItens.map(
          (recipe, index) => (
            <RecipeConcluded key={ index } index={ index } recipe={ recipe } />
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
