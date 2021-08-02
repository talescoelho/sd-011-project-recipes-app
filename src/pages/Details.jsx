import React from 'react';

export default function Details() {
  return (
    <div>
      Details
      <img data-testid="recipe-photo" src="" alt="" />
      Nome = { "strMeal" }
      Categoria = { "strCategory" }
      Igredientes = {" strIngredient1 cada igrediente e quantidade tem sua chave "}
      -Lista de Igredientes
      Instruções = { "strInstructions"}
      - Instruções detalhadas
      Video = { "strInstructions" }
      - Link do video / youtube
      Recomendadas
      Corrousel
      Botão de iniciar receita
    </div>
  );
}
