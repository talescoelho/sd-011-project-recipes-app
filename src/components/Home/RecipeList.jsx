import React from 'react';
import { useRecipes } from '../../hooks';

function RecipeList() {
  const { isLoading, error, recipes } = useRecipes();
  if (isLoading) {
    return (
      <p>...carregando</p>
    );
  }
  if (error) {
    return (
      <p>deu errado filhao</p>
    );
  }
  if (!recipes) {
    return (
      <p>Não foi possivel encontrar nada tente outro termo</p>
    );
  }
  return (
    <ol>
      {console.log(recipes)}
      {recipes.map((meals) => <li key={ meals.idMeal }>{ meals.strMeal }</li>)}
    </ol>
  );
}

export default RecipeList;
