import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Foods, Cocktails } from '../services';

export default function Details() {
  const [setRecipe] = useState();
  const { id } = useParams();
  const { location } = useHistory();

  useEffect(() => {
    async function asyncFunction() {
      if (location.pathname.includes('comida'))setRecipe(await Foods.getById(id));
      if (location.pathname.includes('bebida'))setRecipe(await Cocktails.getById(id));
    }
    asyncFunction();
  }, [id, location, setRecipe]);

  // const { recipe }

  return (
    <div>
      Details
      <img data-testid="recipe-photo" src="" alt="" />
      Nome =
      {' '}
      strMeal
      Categoria =
      {' '}
      strCategory
      <div />
      Video =
      {' '}
      strInstructions
      - Link do video / youtube
      Recomendadas
      Corrousel
      Botão de iniciar receita
    </div>
  );
}
