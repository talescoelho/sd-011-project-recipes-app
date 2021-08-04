import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { fetchFood } from '../services/FoodAPI';
import CardsDrinks from '../components/CardsDrinks';
import '../styles/FoodDetails.scss';
import { isRecipeDone } from '../services/RecipesLocalStorage';
import ShareBtn from '../components/ShareBtn';
import FavoriteBtn from '../components/FavoriteBtn';

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

  function getVideoId() {
    if (food) {
      const urlYT = food.meals[0].strYoutube;

      return urlYT.substring(urlYT.indexOf('v=') + 2);
    }
    return '';
  }

  function listIngradient() {
    const retorno = [];
    const qtdMax = 20;
    for (let index = 1; index <= qtdMax; index += 1) {
      if (
        returnRecipe()[`strIngredient${index}`] !== ''
        && returnRecipe()[`strIngredient${index}`] !== null
      ) {
        const indexDataTest = index - 1;
        retorno.push(
          <li
            data-testid={ `${indexDataTest}-ingredient-name-and-measure` }
            key={ `${indexDataTest}-ingrname-id` }
          >
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
    <main className="food-details">
      <div>
        <img
          className="imgreceita"
          data-testid="recipe-photo"
          src={ returnRecipe().strMealThumb }
          alt="img"
        />
        <h1 data-testid="recipe-title">{returnRecipe().strMeal}</h1>
        <ShareBtn />
        <FavoriteBtn />
        <p data-testid="instructions">{returnRecipe().strInstructions}</p>
        <p data-testid="recipe-category">
          Categoria:
          {returnRecipe().strCategory}
        </p>
        <p>
          {listIngradient()}
        </p>
        <h1>Vídeo</h1>
        <p>
          <iframe
            data-testid="video"
            title="Vídeo da Receita"
            frameBorder="0"
            allow="encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            src={ `https://www.youtube.com/embed/${getVideoId()}` }
            width="100%"
          />
        </p>
        {(isRecipeDone(params.id) === false) ? (
          <Link to={ `/comidas/${params.id}/in-progress` }>
            <Button className="btnstart" type="button" data-testid="start-recipe-btn">
              Iniciar Receita
            </Button>
          </Link>
        ) : ('') }
      </div>
      <div>
        <CardsDrinks />
      </div>
    </main>
  );
}
