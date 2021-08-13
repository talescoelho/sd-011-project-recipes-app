import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router';
import loading from '../images/loading.gif';

import {
  Layout,
  RecipeRecommendationList,
  ShareButton,
  FavoriteButton } from '../components';

import { useLocalStorage } from '../hooks';

const NOT_FOUND_INDEX = -1;

const renderLoadingOrError = (error, isLoading) => {
  if (isLoading) {
    return (
      <img
        src={ loading }
        alt="carregando"
        width="100px"
      />
    );
  }

  if (error) return <p>Opa... algo deu errado</p>;

  return false;
};

function FoodDetails() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cocktail, setCocktail] = useState(null);
  const [recipesLoading, setRecipesLoading] = useState(true);
  const [recipesError, setRecipesError] = useState(null);
  const [recipes, setRecipes] = useState([]);
  const [isDone, setIsDone] = useState(false);
  const [isInProgress, setIsInProgress] = useState(false);
  const { id } = useParams();
  const history = useHistory();
  const { getInProgressRecipeByType, getDoneRecipes } = useLocalStorage();

  const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php'; // TODO usar token
  const RECIPES_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

  useEffect(() => {
    fetch(`${BASE_URL}?i=${id}`)
      .then((response) => response.json())
      .then((result) => setCocktail(result.drinks[0]))
      .catch(setError)
      .finally(() => setIsLoading(false));

    fetch(RECIPES_URL)
      .then((response) => response.json())
      .then((result) => setRecipes(result.meals))
      .catch(setRecipesError)
      .finally(() => setRecipesLoading(false));

    setIsDone(getDoneRecipes().findIndex((r) => r.id === id) !== NOT_FOUND_INDEX);
    setIsInProgress(getInProgressRecipeByType('drinks')[id] !== undefined);
  }, [id, getDoneRecipes, getInProgressRecipeByType]);

  const renderNoDrinkMessage = () => renderLoadingOrError(error, isLoading);

  const renderNoRecipesMessage = () => renderLoadingOrError(recipesError, recipesLoading);

  return (
    <Layout title="App de Receitas" noFooter noHeader>
      <main>
        { !cocktail ? renderNoDrinkMessage()
          : (
            <>
              <section>
                <img
                  src={ cocktail.strDrinkThumb }
                  alt={ cocktail.strDrink }
                  data-testid="recipe-photo"
                />
              </section>
              <section>
                <div>
                  <h1 data-testid="recipe-title">{ cocktail.strDrink }</h1>
                  <h2 data-testid="recipe-category">{ cocktail.strAlcoholic }</h2>
                </div>
                <div>
                  <ShareButton id={ id } type="bebida" />
                  <FavoriteButton recipe={ cocktail } />
                </div>
              </section>
              <section>
                <h1>Ingredientes</h1>

                <ol>
                  { Object.keys(cocktail)
                    .filter((key) => /strIngredient/i.test(key))
                    .filter((key) => cocktail[key] !== '')
                    .map((key) => {
                      const index = parseInt(key.replace('strIngredient', ''), 10);
                      return (
                        <li
                          key={ index }
                          data-testid={ `${index - 1}-ingredient-name-and-measure` }
                        >
                          <span>{ cocktail[key] }</span>
                          <span> - </span>
                          <span>{ cocktail[`strMeasure${index}`] }</span>
                        </li>
                      );
                    }) }
                </ol>
              </section>

              <section>
                <h1>Instruções</h1>

                <p data-testid="instructions">{ cocktail.strInstructions }</p>
              </section>

              { !isDone && (
                <button
                  type="button"
                  data-testid="start-recipe-btn"
                  style={ { position: 'fixed', bottom: '0', height: '300px' } }
                  onClick={ () => {
                    history.push(`/bebidas/${id}/in-progress`);
                  } }
                >
                  { isInProgress ? <>Continuar Receita</> : <>Iniciar Receita</> }
                </button>)}

              <section>
                <h1>Recomendações de comida</h1>

                { renderNoRecipesMessage()
                  || <RecipeRecommendationList recipes={ recipes } />}
              </section>
            </>
          ) }
      </main>
    </Layout>
  );
}

export default FoodDetails;
