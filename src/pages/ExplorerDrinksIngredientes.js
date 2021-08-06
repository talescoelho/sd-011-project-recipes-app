import React, { useContext, useEffect, useState } from 'react';
import MyContext from '../context/MyContext';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function ExplorerDrinksIngredients() {
  const { getDrinksIngredients } = useContext(MyContext);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const getIngredient = async () => {
      setIngredients(await getDrinksIngredients());
    };
    getIngredient();
  }, [getDrinksIngredients]);

  const maxArray = 12;
  return (
    <main>
      <Header title="Explorar Ingredientes" disable />
      {
        ingredients.length === 0
          ? <p>Loading</p>
          : ingredients
            .slice(0, maxArray)
            .map((ingredient, index) => (
              <button
                key={ index }
                type="button"
                data-testid={ `${index}-ingredient-card` }
              >
                <img
                  data-testid={ `${index}-card-img` }
                  src={ `https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient1}-Small.png` }
                  alt="Imagem comida"
                  width="150px"
                />
                <p data-testid={ `${index}-card-name` }>{ingredient.strIngredient1}</p>
              </button>
            ))
      }
      <Footer />
    </main>
  );
}
