import React from 'react';

export default function FavoriteRecipesButtons({ onChange }) {
  return (
    <div>
      <button type="button" data-testid="filter-by-all-btn" onClick={ () => onChange(undefined) }>
        All
      </button>

      <button type="button" data-testid="filter-by-food-btn" onClick={ () => onChange('comida') }>
        Food
      </button>

      <button type="button" data-testid="filter-by-drink-btn" onClick={ () => onChange('bebida') }>
        Drinks
      </button>
    </div>
  );
}
