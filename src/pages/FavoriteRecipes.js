import React from 'react';
import Header from '../components/Header';

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
      <Header title="Receitas Favoritas" search={ false } />
    </div>
  );
}
