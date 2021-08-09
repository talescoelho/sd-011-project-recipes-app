import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MyContext from '../context/MyContext';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function ExplorerFoodsIngredients() {
  const { getFoodsIngredients,
    setData,
    foodsSearchLinks } = useContext(MyContext);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const getIngredient = async () => {
      setIngredients(await getFoodsIngredients());
      const response = await fetch(foodsSearchLinks.fetchAll);
      const results = await response.json();
      const { meals } = results;
      setData(meals);
    };
    getIngredient();
  }, [foodsSearchLinks.fetchAll, setData, getFoodsIngredients]);

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
              <Link
                to={ { pathname: '/comidas', state: ingredient.strIngredient } }
                key={ index }
              >
                <button
                  type="button"
                  data-testid={ `${index}-ingredient-card` }
                  value={ ingredient.strIngredient }
                >
                  <img
                    data-testid={ `${index}-card-img` }
                    src={ `https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}-Small.png` }
                    alt="Imagem comida"
                    width="75px"
                  />
                  <p data-testid={ `${index}-card-name` }>{ingredient.strIngredient}</p>
                </button>
              </Link>
            ))
      }
      <Footer />
    </main>
  );
}
