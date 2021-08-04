import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import propTypes from 'prop-types';
import { fetchFood } from '../services/FoodAPI';
import CardsDrinks from './CardsDrinks';
import '../styles/FoodDetails.scss';
import { isRecipeDone } from '../services/RecipesLocalStorage';
import ShareBtn from './ShareBtn';
import FavoriteBtn from './FavoriteBtn';

export default function FoodDetails({ type }) {
  const params = useParams();
  const [food, setFood] = useState({});
  console.log(food);

  useEffect(() => {
    const getFood = async () => {
      const data = await fetchFood(params.id, type);
      setFood(data);
    };
    getFood();
  }, [params.id, type]);

  // function getVideoId() {
  //   if (food.strYoutube) {
  //     const urlYT = food.strYoutube;

  //     return urlYT.substring(urlYT.indexOf('v=') + 2);
  //   }
  //   return '';
  // }

  function listIngradient(item) {
    const retorno = [];
    const qtdMax = 20;
    for (let index = 1; index <= qtdMax; index += 1) {
      if (
        item[`strIngredient${index}`] !== ''
        && item[`strIngredient${index}`] !== null
      ) {
        const indexDataTest = index - 1;
        retorno.push(
          <li
            data-testid={ `${indexDataTest}-ingredient-name-and-measure` }
            key={ `${indexDataTest}-ingrname-id` }
          >
            {item[`strIngredient${index}`]}
            {' '}
            -
            {' '}
            {item[`strMeasure${index}`]}
          </li>,
        );
      }
    }

    return retorno;
  }

  const { strMealThumb, strDrinkThumb, strMeal, strInstructions, strCategory } = food;
  return (
    <main className="food-details">
      <div>
        <img
          className="imgreceita"
          data-testid="recipe-photo"
          src={ strMealThumb || strDrinkThumb }
          alt="img"
        />
        <h1 data-testid="recipe-title">{strMeal}</h1>
        <ShareBtn />
        <FavoriteBtn />
        <p data-testid="instructions">{strInstructions}</p>
        <p data-testid="recipe-category">
          Categoria:
          {strCategory}
        </p>
        <p>
          {listIngradient(food)}
        </p>
        <h1>Vídeo</h1>
        <p>
          {/* <iframe
            data-testid="video"
            title="Vídeo da Receita"
            frameBorder="0"
            allow="encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            src={ `https://www.youtube.com/embed/${getVideoId()}` }
            width="100%"
          /> */}
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

FoodDetails.propTypes = {
  type: propTypes.string.isRequired,
};
