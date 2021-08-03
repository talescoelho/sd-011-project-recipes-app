import React, { useState, useEffect } from 'react';
import FavoriteRecipeCard from '../components/FavoriteRecipeCard';
import Header from '../components/Header';

function ReceitasFavoritas() {
  const [filter, setFilter] = useState('all');
  const [force, setForce] = useState(false);
  const [data, setData] = useState(JSON.parse(localStorage.getItem('favoriteRecipes')));
  useEffect(() => {
    setData(JSON.parse(localStorage.getItem('favoriteRecipes')));
  }, [force]);
  return (
    <div>
      <Header title="Receitas Favoritas" />
      <button
        data-testid="filter-by-all-btn"
        type="button"
        onClick={ () => setFilter('all') }
      >
        All
      </button>
      <button
        data-testid="filter-by-food-btn"
        type="button"
        onClick={ () => setFilter('comida') }
      >
        Food
      </button>
      <button
        data-testid="filter-by-drink-btn"
        type="button"
        onClick={ () => setFilter('bebida') }
      >
        Drinks
      </button>
      {data ? data
        .filter((e) => {
          switch (filter) {
          case 'all':
            return true;
          case 'comida':
            return e.type === filter;
          case 'bebida':
            return e.type === filter;
          default:
            return true;
          }
        })
        .map((e, i) => (e.type === 'comida' ? (
          <FavoriteRecipeCard
            key={ i }
            name={ e.name }
            id={ e.id }
            comidaOuBebida={ e.type }
            src={ e.image }
            text={ e.category }
            area={ e.area }
            index={ i }
            forceUpdate={ () => setForce(!force) }
          />)
          : (
            <FavoriteRecipeCard
              key={ i }
              name={ e.name }
              id={ e.id }
              comidaOuBebida={ e.type }
              src={ e.image }
              text={ e.alcoholicOrNot }
              area={ e.area }
              index={ i }
              forceUpdate={ () => setForce(!force) }
            />
          ))) : null}
    </div>
  );
}

export default ReceitasFavoritas;
