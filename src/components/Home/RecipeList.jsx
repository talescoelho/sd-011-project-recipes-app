import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useRecipes } from '../../hooks';

function RecipeList() {
  const { isLoading, error, recipes } = useRecipes();
  const magicalNumber = 12;

  useEffect(() => {
    if (!recipes) {
      alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
    }
  }, [recipes]);

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

  return (
    <ol>
      {recipes && recipes.length === 1 && <Redirect
        to={
          `/comidas/${recipes[0].idMeal}`
        }
      /> }
      {recipes && recipes.slice(0, magicalNumber)
        .map((meals, index) => (
          <li data-testid={ `${index}-recipe-card` } key={ meals.idMeal }>
            <img
              alt={ `Foto de uma ${meals.strMeal}` }
              data-testid={ `${index}-card-img` }
              src={ meals.strMealThumb }
            />
            <h3
              data-testid={ `${index}-card-name` }
            >
              { meals.strMeal }
            </h3>

          </li>))}
    </ol>
  );
}

export default RecipeList;
