import React from 'react';
import { ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
// import Header from '../components/Header';

// const objFavoriteRecipes = [{
//   id: id-da-receita,
//   type: comida-ou-bebida,
//   area: area-da-receita-ou-texto-vazio,
//   category: categoria-da-receita-ou-texto-vazio,
//   alcoholicOrNot: alcoholic-ou-non-alcoholic-ou-texto-vazio,
//   name: nome-da-receita,
//   image: imagem-da-receita
// }];

export default function FavoriteRecipes() {
  return (
    <div>
      <section style={ { textAlign: 'center' } }>
        <ToggleButtonGroup
          type="radio"
          name="type"
          value={ type }
          // onChange={ handleChange }
        >
          <ToggleButton name="type" data-testid="filter-by-all-btn" value="all">
            All
          </ToggleButton>
          <ToggleButton name="type" data-testid="filter-by-food-btn" value="meal">
            Food
          </ToggleButton>
          <ToggleButton name="type" data-testid="filter-by-drink-btn" value="drink">
            Drink
          </ToggleButton>
        </ToggleButtonGroup>
      </section>
    </div>
  );
}
