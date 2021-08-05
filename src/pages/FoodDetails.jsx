import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router';
import { Layout, ActionButton } from '../components';

function FoodDetails() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [recipe, setRecipe] = useState(null);
  const [drinksLoading, setDrinksLoading] = useState(true);
  const [drinksError, setDrinksError] = useState(null);
  const [isDone, setIsDone] = useState(false);
  const [isInProgress, setIsInProgress] = useState(false);
  const [drinks, setDrinks] = useState([]);
  const { id } = useParams();

  const BASE_URL = 'https://www.themealdb.com/api/json/v1/1/lookup.php'; // TODO usar token
  const DRINKS_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

  useEffect(() => {
    fetch(`${BASE_URL}?i=${id}`)
      .then((response) => response.json())
      .then((result) => setRecipe(result.meals[0]))
      .catch(setError)
      .finally(() => setIsLoading(false));

    fetch(DRINKS_URL)
      .then((response) => response.json())
      .then((result) => setDrinks(result.drinks))
      .catch(setDrinksError)
      .finally(() => setDrinksLoading(false));

    const storedDoneRecipes = localStorage.getItem('doneRecipes');
    const parsedDoneRecipes = storedDoneRecipes ? JSON.parse(storedDoneRecipes) : [];
    if (parsedDoneRecipes.findIndex((parsedRecipe) => parsedRecipe.id == id) > -1) {
      setIsDone(true);
    }

    const storedInProgressRecipes = localStorage.getItem('inProgressRecipes');
    const parsedInProgressRecipes = storedInProgressRecipes ? JSON.parse(storedInProgressRecipes) : { meals: [] };
    if (parsedInProgressRecipes.meals[id]) {
      setIsInProgress(true);
    }
  }, [id]);

  const renderNoRecipeMessage = () => {
    if (isLoading) return <p>Carregando...</p>;

    if (error) return <p>Opa... algo deu errado</p>;
  };

  const renderNoDrinksMessage = () => {
    if (drinksLoading) return <p>Carregando...</p>;

    if (drinksError) return <p>Opa... algo deu errado</p>;

    return false;
  };

  const styles = {
    drinkRecommendationList: {
      display: 'flex',
      gap: '32px',
      overflowX: 'auto',
      width: '460px',
      height: '260px',
      listStyle: 'none',
    },
    drinksRecommendationCard: {
      width: '200px',
      flexShrink: '0',
    },
    drinksRecommendationImage: {
      display: 'block',
      width: '100%',
    },
  }

  return (
    <Layout title="App de Receitas">
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
                <iframe data-testid="video" width="560" height="315" src={ recipe.strYoutube.replace('watch?v=', 'embed/') } title="YouTube video player" frameBorder="0" allow="accelerometer;clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </section>

              { !isDone && (
                  <button type="button" data-testid="start-recipe-btn" style={{ position: 'fixed', bottom: '100px' }}>
                    { isInProgress ? <>Continuar Receita</> :  <>Iniciar Receita</> }
                  </button>)}

              <section>
                <h1>Recomendações de bebida</h1>

                { renderNoDrinksMessage() || (
                  <ol style={ styles.drinkRecommendationList }>
                    { drinks.slice(0, 6).map((drink, index) => (
                      <li style={ styles.drinksRecommendationCard } data-testid={`${index}-recomendation-card`} key={drink.idDrink}>
                        <img style={ styles.drinksRecommendationImage } src={ drink.strDrinkThumb } alt={ drink.strDrink } />
                        <h1 data-testid={`${index}-recomendation-title`}>{ drink.strDrink }</h1>
                      </li>
                    )) }
                  </ol>
                ) }
              </section>
            </>
          ) }
      </main>
    </Layout>
  );
}

export default FoodDetails;
