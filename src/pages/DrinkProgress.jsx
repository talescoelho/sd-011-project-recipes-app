import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router';
import loading from '../images/loading.gif';

import { Layout, FavoriteButton, ShareButton } from '../components';

import { useLocalStorage } from '../hooks';

const NOT_FOUND_INDEX = -1;

const renderLoadingOrError = (error, isLoading) => {
  if (isLoading) {
    return <img src={ loading } alt="carregando" width="100px" />;
  }

  if (error) return <p>Opa... algo deu errado</p>;

  return false;
};

function DrinkProgress() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [drink, setDrink] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const [usedIngredients, setUsedIngredients] = useState([]);
  const { id } = useParams();
  const history = useHistory();
  const {
    getFavoriteRecipes,
    getInProgressRecipeByType,
    updateInProgressRecipe,
    addDoneRecipes,
  } = useLocalStorage();

  const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php'; // TODO usar token

  useEffect(() => {
    fetch(`${BASE_URL}?i=${id}`)
      .then((response) => response.json())
      .then((result) => setDrink(result.drinks[0]))
      .catch(setError)
      .finally(() => setIsLoading(false));

    const inProgressCocktails = getInProgressRecipeByType('cocktails');
    const inProgressIngredients = inProgressCocktails[id] || [];
    setUsedIngredients(inProgressIngredients);
  }, [id, getFavoriteRecipes, getInProgressRecipeByType]);

  useEffect(() => {
    if (!drink) return;

    setIngredients(Object.keys(drink)
      .filter((key) => /strIngredient/i.test(key))
      .filter((key) => drink[key] !== '' && drink[key] !== null));
  }, [drink]);

  const renderNoDrinkMessage = () => renderLoadingOrError(error, isLoading);

  return (
    <Layout title="App de Receitas" noFooter noHeader>
      <main>
        { !drink ? renderNoDrinkMessage()
          : (
            <>
              <section>
                <img
                  src={ drink.strDrinkThumb }
                  alt={ drink.strDrink }
                  data-testid="recipe-photo"
                />
              </section>
              <section>
                <div>
                  <h1 data-testid="recipe-title">{ drink.strDrink }</h1>
                  <h2 data-testid="recipe-category">{ drink.strAlcoholic }</h2>
                </div>
                <div>
                  <ShareButton id={ id } type="bebida" />
                  <FavoriteButton recipe={ drink } />
                </div>
              </section>
              <section>
                <h1>Ingredientes</h1>

                <ol>
                  { ingredients.map((key) => {
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
                            checked={ usedIngredients
                              .indexOf(drink[key]) !== NOT_FOUND_INDEX }
                            onChange={ () => {
                              const newUsedIngredients = [...usedIngredients];
                              if (newUsedIngredients
                                .indexOf(drink[key]) === NOT_FOUND_INDEX) {
                                newUsedIngredients.push(drink[key]);
                              } else {
                                newUsedIngredients
                                  .splice(newUsedIngredients.indexOf(drink[key]), 1);
                              }
                              setUsedIngredients(newUsedIngredients);
                              updateInProgressRecipe(
                                'cocktails',
                                { id, usedIngredients: newUsedIngredients },
                              );
                            } }
                          />
                          <span>{ drink[key] }</span>
                          <span> - </span>
                          <span>{ drink[`strMeasure${index}`] }</span>
                        </label>
                      </li>
                    );
                  }) }
                </ol>
              </section>

              <section>
                <h1>Instruções</h1>

                <p data-testid="instructions">{ drink.strInstructions }</p>
              </section>

              <section>
                <button
                  type="button"
                  data-testid="finish-recipe-btn"
                  onClick={ () => {
                    addDoneRecipes({
                      id,
                      type: 'bebida',
                      area: '',
                      category: drink.strCategory,
                      alcoholicOrNot: drink.strAlcoholic,
                      name: drink.strDrink,
                      image: drink.strDrinkThumb,
                      doneDate: new Date().toLocaleDateString(),
                      tags: [],
                    });
                    history.push('/receitas-feitas');
                  } }
                  disabled={ usedIngredients.length !== ingredients.length }
                >
                  Finalizar receita
                </button>

              </section>
            </>
          ) }
      </main>
    </Layout>
  );
}

export default DrinkProgress;
