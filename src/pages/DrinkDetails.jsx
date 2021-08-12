import React, { useEffect, useState } from 'react';
import copy from 'clipboard-copy';
import { useParams, useHistory } from 'react-router';
import loading from '../images/loading.gif';

import { Layout, ActionButton, RecipeRecommendationList } from '../components';

import {
  getStoredFavorites,
  getDoneRecipes,
  getStoredInProgressRecipes } from '../utils/storage';

const TOAST_TIMEOUT = 3000;

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
  const [isFavorite, setIsFavorite] = useState(false);
  const [toastIsVisible, setToastIsVisible] = useState(false);
  const { id } = useParams();
  const history = useHistory();

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

    getDoneRecipes(id, setIsDone);
    getStoredInProgressRecipes(id, setIsInProgress, 'cocktails');
    getStoredFavorites(id, setIsFavorite);
  }, [id]);

  function showToast() {
    setToastIsVisible(true);

    setTimeout(() => {
      setToastIsVisible(false);
    }, TOAST_TIMEOUT);
  }

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
                  <ActionButton
                    action="share"
                    onClick={ () => {
                      copy(`http://localhost:3000/bebidas/${id}`); // TODO usar history location
                      showToast();
                    } }
                  />
                  <ActionButton
                    action="favorite"
                    reverse={ isFavorite }
                    onClick={ () => {
                      const storedFavoriteRecipes = localStorage
                        .getItem('favoriteRecipes');
                      const parsedFavoriteRecipes = storedFavoriteRecipes
                        ? JSON.parse(storedFavoriteRecipes)
                        : [];

                      let favoriteRecipesToStore;

                      if (isFavorite) {
                        favoriteRecipesToStore = parsedFavoriteRecipes
                          .filter((recipe) => recipe.id !== id);
                      } else {
                        favoriteRecipesToStore = [...parsedFavoriteRecipes, {
                          id,
                          type: 'bebida',
                          area: '',
                          category: cocktail.strCategory,
                          alcoholicOrNot: cocktail.strAlcoholic,
                          name: cocktail.strDrink,
                          image: cocktail.strDrinkThumb,
                        }];
                      }

                      localStorage.setItem(
                        'favoriteRecipes',
                        JSON.stringify(favoriteRecipesToStore),
                      );

                      setIsFavorite((previously) => !previously);
                    } }
                  />
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
        { toastIsVisible && (
          <div style={ { position: 'fixed', right: '25px', bottom: '25px' } }>
            <p>Link copiado!</p>
          </div>
        ) }
      </main>
    </Layout>
  );
}

export default FoodDetails;
