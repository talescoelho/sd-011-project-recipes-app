import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFood } from '../services/FoodAPI';

export default function FoodDetails() {
  const params = useParams();
  const [food, setFood] = useState();

  useEffect(() => {
    const getFood = async () => {
      const data = await fetchFood(params.id);
      setFood(data);
    };
    getFood();
  }, [params.id]);

  function returnRecipe() {
    if (food) {
      return food.meals[0];
    }
    return '';
  }

  function listIngradient() {
    const retorno = [];
    for (let index = 1; index <= 20; index++) {
      if (returnRecipe()[`strIngredient${index}`] != '') {
        retorno.push(
          <li key={ index }>
            {' '}
            {returnRecipe()[`strIngredient${index}`]}
            {' '}
            -
            {' '}
            {returnRecipe()[`strMeasure${index}`]}
          </li>,
        );
      }
    }

    return retorno;
  }

  return (
    <div>
      <button type="button" data-testid="share-btn">
        Compartilhar
      </button>
      <button type="button" data-testid="favorite-btn">
        Favoritar
      </button>
      <div>
        <h1 data-testid="recipe-title">{returnRecipe().strMeal}</h1>
        <img
          data-testid="recipe-photo"
          src={ returnRecipe().strMealThumb }
          alt="img"
        />
        <p data-testid="instructions">{returnRecipe().strInstructions}</p>
        <p data-testid="recipe-category">
          Categoria:
          {returnRecipe().strCategory}
        </p>
        <p data-testid={ `${listIngradient()}-ingredient-name-and-measure` }>
          {listIngradient()}
        </p>
        <p>
          Vídeo:
          <a
            data-testid="video"
            href={ returnRecipe().strYoutube }
            target="blank"
          >
            Receita
          </a>
        </p>
        <button type="button" data-testid="start-recipe-btn">
          Iniciar Receita
        </button>
      </div>
    </div>
  );
}
