import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MyContext from '../context/MyContext';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function ExplorerDrinksIngredients() {
  const { getDrinksIngredients,
    setData,
    drinksSearchLinks } = useContext(MyContext);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const getIngredient = async () => {
      setIngredients(await getDrinksIngredients());
      const response = await fetch(drinksSearchLinks.fetchAll);
      const results = await response.json();
      const { drinks } = results;
      setData(drinks);
    };
    console.log('oi');
    getIngredient();
  }, [drinksSearchLinks.fetchAll, setData, getDrinksIngredients]);

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
                to={ { pathname: '/bebidas', state: ingredient.strIngredient1 } }
                key={ index }
              >
                <button
                  type="button"
                  data-testid={ `${index}-ingredient-card` }
                  value={ ingredient.strIngredient }
                >
                  <img
                    data-testid={ `${index}-card-img` }
                    src={ `https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient1}-Small.png` }
                    alt="Imagem bebida"
                    width="150px"
                  />
                  <p data-testid={ `${index}-card-name` }>{ingredient.strIngredient1}</p>
                </button>
              </Link>
            ))
      }
      <Footer />
    </main>
  );
}
