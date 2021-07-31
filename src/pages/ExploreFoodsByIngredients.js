import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ExploreFoodsByIngredients() {
  const [isLoading, setIsLoading] = useState(true);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
      const json = await response.json();
      const { meals } = json;
      setIngredients(meals);
      setIsLoading(false);
    };
    fetchApi();
  }, []);

  function renderIngredientsCard() {
    const maxLength = 12;
    const cardsIngredients = ingredients.map((ingredient, index) => {
      if (index < maxLength) {
        return (
          <div
            key={ ingredient.strIngredient }
            data-testid={ `${index}-ingredient-card` }
          >
            <img alt="thumbnail drink" height="25" src={ `https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}-Small.png` } data-testid={ `${index}-card-img` } />
            <p data-testid={ `${index}-card-name` }>{ingredient.strIngredient}</p>
          </div>
        );
      } return null;
    });
    return cardsIngredients;
  }

  return (
    <div>
      <h1>My Explore Foods By Ingredients Page</h1>
      <Header title="Explorar Ingredientes" />

      <div>
        { isLoading ? <p>Carregando...</p> : renderIngredientsCard() }
      </div>

      <Footer />
    </div>
  );
}

export default ExploreFoodsByIngredients;
