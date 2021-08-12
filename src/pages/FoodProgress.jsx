import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router';
import copy from 'clipboard-copy';
import loading from '../images/loading.gif';

import { Layout, FavoriteButton } from '../components';

import { useLocalStorage } from '../hooks';

const NOT_FOUND_INDEX = -1;
const TOAST_TIMEOUT = 3000;

const renderLoadingOrError = (error, isLoading) => {
  if (isLoading) {
    return <img src={ loading } alt="carregando" width="100px" />;
  }

  if (error) return <p>Opa... algo deu errado</p>;

  return false;
};

function FoodDetails() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [recipe, setRecipe] = useState(null);
  const [toastIsVisible, setToastIsVisible] = useState(false);
  const [usedIngredients, setUsedIngredients] = useState([]);
  const { id } = useParams();
  const history = useHistory();
  const { getFavoriteRecipes, getInProgressRecipeByType, updateInProgressRecipe } = useLocalStorage();

  const BASE_URL = 'https://www.themealdb.com/api/json/v1/1/lookup.php'; // TODO usar token

  useEffect(() => {
    fetch(`${BASE_URL}?i=${id}`)
      .then((response) => response.json())
      .then((result) => setRecipe(result.meals[0]))
      .catch(setError)
      .finally(() => setIsLoading(false));

    const inProgressMeals = getInProgressRecipeByType('meals');
    const inProgressIngredients = inProgressMeals[id] || [];
    setUsedIngredients(inProgressIngredients);
    console.log({ id, getFavoriteRecipes, getInProgressRecipeByType });
  }, [id, getFavoriteRecipes, getInProgressRecipeByType]);

  function showToast() {
    setToastIsVisible(true);

    setTimeout(() => {
      setToastIsVisible(false);
    }, TOAST_TIMEOUT);
  }

  const renderNoRecipeMessage = () => renderLoadingOrError(error, isLoading);

  return (
    <Layout title="App de Receitas" noFooter noHeader>
      <main>
        { !recipe ? renderNoRecipeMessage()
          : (
            <>
              <section>
                <img
                  src={ recipe.strMealThumb }
                  alt={ recipe.strMeal }
                  data-testid="recipe-photo"
                />
              </section>
              <section>
                <div>
                  <h1 data-testid="recipe-title">{ recipe.strMeal }</h1>
                  <h2 data-testid="recipe-category">{ recipe.strCategory }</h2>
                </div>
                <div>
                  {/* <ActionButton
                    action="share"
                    onClick={ () => {
                      copy(`http://localhost:3000/comidas/${id}`);
                      showToast();
                    } }
                  /> */}
                  <FavoriteButton recipe={ recipe } />
                </div>
              </section>
              <section>
                <h1>Ingredientes</h1>

                <ol>
                  { Object.keys(recipe)
                    .filter((key) => /strIngredient/i.test(key))
                    .filter((key) => recipe[key] !== '' && recipe[key] !== null)
                    .map((key) => {
                      const index = parseInt(key.replace('strIngredient', ''), 10);
                      return (
                        <li
                          key={ index }
                          data-testid={ `${index - 1}-ingredient-step` }
                        >
                          <label
                            htmlFor={ `${index}-ingredient-checkbox` }
                          >
                            <input
                              type="checkbox"
                              id={ `${index}-ingredient-checkbox` }
                              checked={ usedIngredients.indexOf(recipe[key]) !== NOT_FOUND_INDEX }
                              onChange={ () => {
                                const newUsedIngredients = [...usedIngredients];
                                if (newUsedIngredients.indexOf(recipe[key]) === NOT_FOUND_INDEX) {
                                  newUsedIngredients.push(recipe[key]);
                                } else {
                                  newUsedIngredients.splice(newUsedIngredients.indexOf(recipe[key]), 1);
                                }
                                setUsedIngredients(newUsedIngredients);
                                updateInProgressRecipe('meals', { id, usedIngredients: newUsedIngredients });
                              } }
                            />
                            <span>{ recipe[key] }</span>
                            <span> - </span>
                            <span>{ recipe[`strMeasure${index}`] }</span>
                          </label>
                        </li>
                      );
                    }) }
                </ol>
              </section>

              <section>
                <h1>Instruções</h1>

                <p data-testid="instructions">{ recipe.strInstructions }</p>
              </section>

              <section>
                <iframe
                  data-testid="video"
                  width="560"
                  height="315"
                  src={ recipe.strYoutube.replace('watch?v=', 'embed/') }
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer;clipboard-write; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </section>

              {/* { !isDone && (
                <button
                  type="button"
                  data-testid="start-recipe-btn"
                  onClick={ () => {
                    history.push(`/comidas/${id}/in-progress`);
                  } }
                  style={ { position: 'fixed', bottom: '0', height: '300px' } }
                >
                  { isInProgress ? <>Continuar Receita</> : <>Iniciar Receita</> }
                </button>)} */}
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
