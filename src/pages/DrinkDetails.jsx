
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router';
import copy from 'clipboard-copy';
import { Layout, ActionButton } from '../components';

function FoodDetails() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cocktail, setCocktail] = useState(null);
  const [recipesLoading, setRecipesLoading] = useState(true);
  const [recipesError, setRecipesError] = useState(null);
  const [isDone, setIsDone] = useState(false);
  const [isInProgress, setIsInProgress] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [toastIsVisible, setToastIsVisible] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
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

    const storedDoneRecipes = localStorage.getItem('doneRecipes');
    const parsedDoneRecipes = storedDoneRecipes ? JSON.parse(storedDoneRecipes) : [];
    if (parsedDoneRecipes.findIndex((parsedRecipe) => parsedRecipe.id == id) > -1) {
      setIsDone(true);
    }

    const storedInProgressRecipes = localStorage.getItem('inProgressRecipes');
    const parsedInProgressRecipes = storedInProgressRecipes ? JSON.parse(storedInProgressRecipes) : { cocktails: [] };
    if (parsedInProgressRecipes.cocktails && parsedInProgressRecipes.cocktails[id]) {
      setIsInProgress(true);
    }

    const storedFavoriteRecipes = localStorage.getItem('favoriteRecipes');
    const parsedFavoriteRecipes = storedFavoriteRecipes ? JSON.parse(storedFavoriteRecipes) : [];
    if (parsedFavoriteRecipes.findIndex((parsedRecipe) => parsedRecipe.id == id) > -1) {
      setIsFavorite(true);
    }
  }, [id]);

  function showToast() {
    setToastIsVisible(true);

    setTimeout(() => {
      setToastIsVisible(false);
    }, 3000);
  }

  const renderNoDrinkMessage = () => {
    if (isLoading) return <p>Carregando...</p>;

    if (error) return <p>Opa... algo deu errado</p>;
  };

  const renderNoRecipesMessage = () => {
    if (recipesLoading) return <p>Carregando...</p>;

    if (recipesError) return <p>Opa... algo deu errado</p>;

    return false;
  };

  const styles = {
    recipeRecommendationList: {
      display: 'flex',
      gap: '32px',
      overflowX: 'auto',
      width: '460px',
      height: '260px',
      listStyle: 'none',
    },
    recipesRecommendationCard: {
      width: '200px',
      flexShrink: '0',
    },
    recipesRecommendationImage: {
      display: 'block',
      width: '100%',
    },
  }

  return (
    <Layout title="App de Receitas">
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
                      copy(`http://localhost:3000/bebidas/${id}`)
                      showToast();
                    } }
                  />
                  <ActionButton
                    action="favorite"
                    reverse={ isFavorite }
                    onClick={ () => {
                      const storedFavoriteRecipes = localStorage.getItem('favoriteRecipes');
                      const parsedFavoriteRecipes = storedFavoriteRecipes ? JSON.parse(storedFavoriteRecipes) : [];

                      let favoriteRecipesToStore;

                      if (isFavorite) {
                        favoriteRecipesToStore = parsedFavoriteRecipes.filter((recipe) => recipe.id !== id);
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

                      localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipesToStore));

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
                      const index = parseInt(key.replace('strIngredient', ''));
                      return (
                        <li key={ index } data-testid={`${index - 1}-ingredient-name-and-measure`}>
                          <span>{ cocktail[key] }</span>
                          <span> - </span>
                          <span>{ cocktail[`strMeasure${index}`]  }</span>
                        </li>
                      )
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
                    style={{ position: 'fixed', bottom: '0', height: '300px' }}
                    onClick={ () => {
                      history.push(`/bebidas/${id}/in-progress`);
                    } }
                  >
                    { isInProgress ? <>Continuar Receita</> :  <>Iniciar Receita</> }
                  </button>)}

              <section>
                <h1>Recomendações de comida</h1>

                { renderNoRecipesMessage() || (
                  <ol style={ styles.recipeRecommendationList }>
                    { recipes.slice(0, 6).map((meal, index) => (
                      <li style={ styles.recipesRecommendationCard } data-testid={`${index}-recomendation-card`} key={meal.idMeal}>
                        <img style={ styles.recipesRecommendationImage } src={ meal.strMealThumb } alt={ meal.strMeal } />
                        <h1 data-testid={`${index}-recomendation-title`}>{ meal.strMeal }</h1>
                      </li>
                    )) }
                  </ol>
                ) }
              </section>
            </>
          ) }
        { toastIsVisible && (
          <div style={{ position: 'fixed', right: '25px', bottom: '25px' }}>
            <p>Link copiado!</p>
          </div>
        ) }
      </main>
    </Layout>
  );
}

export default FoodDetails;
