import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router';
import { Layout, ActionButton } from '../components';

function FoodDetails() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [recipe, setRecipe] = useState(null);
  const { id } = useParams();

  const BASE_URL = 'https://www.themealdb.com/api/json/v1/1/lookup.php'; // TODO usar token

  useEffect(() => {
    fetch(`${BASE_URL}?i=${id}`)
      .then((response) => response.json())
      .then((result) => setRecipe(result.meals[0]))
      .catch(setError)
      .finally(() => setIsLoading(false));
  }, [id]);

  const renderNoRecipeMessage = () => {
    if (isLoading) return <p>Carregando...</p>;
  };

  console.log(recipe);

  return (
    <Layout title="App de Receitas">
      <main>
        { !recipe ? renderNoRecipeMessage()
          : (
            <>
              <section>
                <img
                  src="https://www.themealdb.com/images/media/meals/sytuqu1511553755.jpg"
                  alt="Beef and Mustard Pie"
                  data-testid="recipe-photo"
                />
              </section>
              <section>
                <div>
                  <h1 data-testid="recipe-title">{ recipe.strMeal }</h1>
                  <h2 data-testid="recipe-category">{ recipe.strCategory }</h2>
                </div>
                <div>
                  <ActionButton
                    action="share"
                    onClick={ () => console.log('oi') }
                  />
                  <ActionButton
                    action="favorite"
                    onClick={ () => console.log('oi') }
                  />
                </div>
              </section>
              <section>
                <h1>Ingredientes</h1>

                <ol>
                  { Object.keys(recipe)
                    .filter((key) => /strIngredient/i.test(key))
                    .filter((key) => recipe[key] !== '')
                    .map((key) => {
                      const index = parseInt(key.replace('strIngredient', ''));
                      return (
                        <li key={ index } data-testid={`${index - 1}-ingredient-name-and-measure`}>
                          <span>{ recipe[key] }</span>
                          <span> - </span>
                          <span>{ recipe[`strMeasure${index}`]  }</span>
                        </li>
                      )
                    }) }
                </ol>
              </section>

              <section>
                <h1>Instruções</h1>

                <p data-testid="instructions">{ recipe.strInstructions }</p>
              </section>

              <section>
                <iframe data-testid="video" width="560" height="315" src={ recipe.strYoutube.replace('watch?v=', 'embed/') } title="YouTube video player" frameborder="0" allow="accelerometer;clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </section>

              <section>
                <button type="button" data-testid="start-recipe-btn">
                  Iniciar receita
                </button>
              </section>
            </>
          ) }
      </main>
    </Layout>
  );
}

export default FoodDetails;
