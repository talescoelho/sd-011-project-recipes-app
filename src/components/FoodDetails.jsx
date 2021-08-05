import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import propTypes from 'prop-types';
import { fetchFood } from '../services/FoodAPI';
import CardsDrinks from './CardsDrinks';
import CardsFood from './CardsFood';
import '../styles/FoodDetails.scss';
import { isRecipeDone } from '../services/RecipesLocalStorage';
import ShareBtn from './ShareBtn';
import FavoriteBtn from './FavoriteBtn';

export default function FoodDetails({ type }) {
  const params = useParams();
  const [food, setFood] = useState([]);
  console.log(food);

  useEffect(() => {
    const getFood = async () => {
      const data = await fetchFood(params.id, type);
      setFood(data);
    };
    getFood();
  }, [params.id, type]);

  function getVideoId() {
    if (food.strYoutube) {
      const urlYT = food.strYoutube;

      return urlYT.substring(urlYT.indexOf('v=') + 2);
    }
    return '';
  }

  function listIngredients(item) {
    const ingredient = Object.entries(item).filter(([key,
      value]) => key.includes('Ingredient') && value);

    return ingredient.map((el, i) => {
      const msr = item[`strMeasure${el[0].replace(/\D/g, '')}`];

      return (
        <li
          data-testid={ `${i}-ingredient-name-and-measure` }
          key={ `${i}-ingrname-id` }
        >
          {msr ? `${el[1]} - ${msr || ''}` : `${el[1]}`}
        </li>);
    });
  }

  const showFrame = () => (<iframe
    data-testid="video"
    title="Vídeo da Receita"
    frameBorder="0"
    allow="encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    src={ `https://www.youtube.com/embed/${getVideoId()}` }
    width="100%"
  />);

  const { strMealThumb, strDrinkThumb,
    strDrink, strMeal, strInstructions, strCategory, strAlcoholic } = food;
  return (
    <main className="food-details">
      <div>
        <img
          className="imgreceita"
          data-testid="recipe-photo"
          src={ strMealThumb || strDrinkThumb }
          alt="img"
        />
        <h1 data-testid="recipe-title">{strMeal || strDrink}</h1>
        <ShareBtn />
        <FavoriteBtn />
        <p>{strAlcoholic}</p>
        <p data-testid="instructions">{strInstructions}</p>
        <p data-testid="recipe-category">
          Categoria:
          {strCategory}
        </p>
        <ul>
          {listIngredients(food)}
        </ul>
        <h2>Recommended Cards</h2>
        {type === 'meals' && showFrame()}

        {(isRecipeDone(params.id) === false) ? (
          <Link to={ `/comidas/${params.id}/in-progress` }>
            <Button className="btnstart" type="button" data-testid="start-recipe-btn">
              Iniciar Receita
            </Button>
          </Link>
        ) : ('') }
      </div>
      <div>
        { type === 'drinks' && (<CardsFood />)}
        {type === 'meals' && (<CardsDrinks />)}
      </div>
    </main>
  );
}

FoodDetails.propTypes = {
  type: propTypes.string.isRequired,
};
