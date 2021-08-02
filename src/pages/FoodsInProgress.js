import React, { useEffect, useState } from 'react';
import FavoriteButton from '../components/FavoriteButton';
import ShareButton from '../components/ShareButton';

export default function FoodsInProgress() {
  const [foods, setFoods] = useState({});

  const fetchComidas = (endPointFetch, setState) => {
    fetch(endPointFetch)
      .then((resolve) => resolve.json())
      .then((response) => setState(response));
  };

  useEffect(() => {
    const page = window.location.pathname.split('/')[1];
    const id = window.location.pathname.split('/')[2];
    if (page === 'comidas') {
      fetchComidas(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`, setFoods);
    } else if (page === 'bebidas') {
      fetchComidas(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`, setFoods);
    }
  }, []);

  if (!foods.meals && !foods.drinks) {
    return (<p>Carregando</p>);
  }

  let food;
  let strType;

  if (foods.meals) {
    food = foods.meals[0];
    strType = 'strMeal';
  } else {
    food = foods.drinks[0];
    strType = 'strDrink';
  }

  const ingredients = Object.keys(food).filter((value) => value.includes('strIngredient'))
    .filter((ingredient) => food[ingredient]);

  function handleClick({ target }) {
    if (target.checked) {
      target.parentNode.className = 'teste';
    } else {
      target.parentNode.className = '';
    }
  }

  return (
    <div>
      <div className="in-progress-card">
        <h3 data-testid="recipe-title">
          { food[strType] }
        </h3>
        <img
          src={ food[`${strType}Thumb`] }
          alt={ food[strType] }
          data-testid="recipe-photo"
        />
        <h4
          data-testid="recipe-category"
        >
          { strType === 'strMeal' ? 'Comida' : 'Bebida' }
        </h4>
        <ul>
          { ingredients.map((ingredient, index) => (
            <li key={ index } data-testid={ `${index}-ingredient-step` }>
              <label
                htmlFor={ food[ingredient] }
              >
                <input
                  type="checkbox"
                  id={ food[ingredient] }
                  name={ food[ingredient] }
                  onClick={ handleClick }
                />
                { food[ingredient] }
              </label>
            </li>
          )) }
        </ul>
        <p data-testid="instructions">
          { food.strInstructions }
        </p>
        <button type="button" data-testid="finish-recipe-btn">
          Finalizar
        </button>
        <ShareButton />
        <FavoriteButton />
      </div>
    </div>
  );
}
