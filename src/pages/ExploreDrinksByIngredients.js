import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ExploreDrinksByIngredients() {
  const [isLoading, setIsLoading] = useState(true);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
      const json = await response.json();
      const { drinks } = json;
      setIngredients(drinks);
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
            key={ ingredient.strIngredient1 }
            data-testid={ `${index}-ingredient-card` }
          >
            <img alt="thumbnail drink" height="25" src={ `https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient1}-Small.png` } data-testid={ `${index}-card-img` } />
            <p data-testid={ `${index}-card-name` }>{ingredient.strIngredient1}</p>
          </div>
        );
      } return null;
    });
    return cardsIngredients;
  }

  return (
    <div>
      <h1>My Explore Drinks By Ingredients Page</h1>
      <Header title="Explorar Ingredientes" />

      <div>
        { isLoading ? <p>Carregando...</p> : renderIngredientsCard() }
      </div>

      <Footer />
    </div>
  );
}

export default ExploreDrinksByIngredients;
