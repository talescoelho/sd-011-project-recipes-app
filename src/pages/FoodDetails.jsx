import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { fetchFood } from '../services/FoodAPI';
import CardsDrinks from './CardsDrinks';
import '../styles/FoodDetails.css';
import imageHeart from '../images/whiteHeartIcon.svg';
import imageShare from '../images/shareIcon.svg';

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
      if (returnRecipe()[`strIngredient${index}`] !== ''
      && returnRecipe()[`strIngredient${index}`] !== null) {
        retorno.push(
          <li>
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
      <div>
        <img
          className="imgreceita"
          data-testid="recipe-photo"
          src={ returnRecipe().strMealThumb }
          alt="img"
        />
        <h1 data-testid="recipe-title">{returnRecipe().strMeal}</h1>
        <button className="btnheader" type="button" data-testid="share-btn">
          <img src={ imageShare } alt="share" />
        </button>
        <button className="btnheader" type="button" data-testid="favorite-btn">
          <img src={ imageHeart } alt="favorite" />
        </button>
        <p data-testid="instructions">{returnRecipe().strInstructions}</p>
        <p data-testid="recipe-category">
          Categoria:
          {returnRecipe().strCategory}
        </p>
        <p data-testid={ `${listIngradient()}-ingredient-name-and-measure` }>
          {listIngradient()}
        </p>
        <p>
          <h1>
            Vídeo
          </h1>
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
        <Button type="button" data-testid="start-recipe-btn">
          Iniciar Receita
        </Button>
      </div>
      <div>
        <CardsDrinks />
      </div>
    </div>
  );
}
