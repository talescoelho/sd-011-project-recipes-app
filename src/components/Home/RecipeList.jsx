import React, { useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { useRecipes } from '../../hooks';
import loading from '../../images/loading.gif';

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
      <img
        src={ loading }
        alt="carregando"
        width="100px"
      />
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
          <Link key={ meals.idMeal } to={ `/comidas/${meals.idMeal}` }>
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
            </li>
          </Link>
        ))}
    </ol>
  );
}

export default RecipeList;
