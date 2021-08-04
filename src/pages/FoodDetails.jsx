import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router';
import { Layout, ActionButton } from '../components';

function FoodDetails() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [recipe, setRecipe] = useState(null);
  const { id } = useParams();
  const history = useHistory();

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

    console.log(error);

    if (error) return <p>Opa... alguma coisa deu errado</p>;
  };

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
                <h1>Ingredients</h1>
              </section>
            </>
          ) }
      </main>
    </Layout>
  );
}

export default FoodDetails;
