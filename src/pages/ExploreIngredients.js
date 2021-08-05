import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/explorerIngredients.css';

export default function ExploreFoodsIngredientes() {
  const [ingredients, setIngredients] = useState(null);
  const [strIngredient, setStrIngredient] = useState(null);
  const [dbType, setDbType] = useState(null);
  const [type, setType] = useState(null);
  const [typePage, setTypePage] = useState(null);
  const location = window.location.pathname.split('/')[2];
  const number = 12;

  function fetchIngredients(endPoint) {
    fetch(endPoint)
      .then((resolve) => resolve.json())
      .then((response) => setIngredients(response));
  }

  useEffect(() => {
    if (location === 'bebidas') {
      setType('drinks');
      setTypePage('bebidas');
      setDbType('thecocktaildb');
      fetchIngredients('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
    } else {
      setType('meals');
      setTypePage('comidas');
      setDbType('themealdb');
      fetchIngredients('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
    }
  }, [location]);

  useEffect(() => {
    if (ingredients) {
      setStrIngredient(ingredients[type].filter((_, index) => index < number));
    }
  }, [ingredients, type]);

  if (!ingredients || !strIngredient) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <Header title="Explorar Ingredientes" searchIcon />
      <div className="container-ingredient-cards">
        {
          strIngredient.map((value, index) => (
            <Link
              to={ { pathname: `/${typePage}`,
                state: Object.values(value)[1] || Object.values(value).join('') } }
              key={ index }
              className="ingredient-cards"
            >
              <div
                data-testid={ `${index}-ingredient-card` }
              >
                <img
                  src={ `https://www.${dbType}.com/images/ingredients/${
                    Object.values(value)[1] || Object.values(value).join('')}-Small.png` }
                  alt={ Object.values(value).join('') }
                  data-testid={ `${index}-card-img` }
                />
                <h5 data-testid={ `${index}-card-name` }>
                  { Object.values(value)[1] || Object.values(value).join('') }
                </h5>
              </div>
            </Link>
          ))
        }
      </div>
      <Footer />
    </div>
  );
}
