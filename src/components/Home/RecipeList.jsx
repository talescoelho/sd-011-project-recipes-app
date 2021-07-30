import React from 'react';
import { Redirect } from 'react-router-dom';
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
      {recipes.length === 1 ? <Redirect to={ `/comidas/${recipes[0].idMeal}` } /> : null}
      {recipes.map((meals) => (<li key={ meals.idMeal }>{ meals.strMeal }</li>))}
    </ol>
  );
}

export default RecipeList;
