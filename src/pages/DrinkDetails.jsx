import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { fetchDrinkDetails } from '../services/DrinkDetails';
import '../styles/FoodDetails.css';
import CardsFood from '../components/CardsFood';
import { isRecipeDone } from '../services/RecipesLocalStorage';
import ShareBtn from '../components/ShareBtn';
import FavoriteBtn from '../components/FavoriteBtn';

export default function DrinkDetails() {
  const params = useParams();
  const [drinks, setDrinks] = useState();

  useEffect(() => {
    const getDrinks = async () => {
      const data = await fetchDrinkDetails(params.id);
      setDrinks(data);
    };
    getDrinks();
  }, [params.id]);

  function returnDrinkDetails() {
    if (drinks) {
      return drinks.drinks[0];
    }
    return '';
  }

  function list() {
    const retorno = [];
    const qtdMax = 15;
    for (let index = 1; index <= qtdMax; index += 1) {
      if (
        returnDrinkDetails()[`strIngredient${index}`] !== ''
        && returnDrinkDetails()[`strIngredient${index}`] !== null
      ) {
        const indexDataTest = index - 1;
        retorno.push(
          <li
            data-testid={ `${indexDataTest}-ingredient-name-and-measure` }
            key={ `${indexDataTest}-ingrname-id` }
          >
            {returnDrinkDetails()[`strIngredient${index}`]}
            {' '}
            -
            {' '}
            {returnDrinkDetails()[`strMeasure${index}`]}
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
          src={ returnDrinkDetails().strDrinkThumb }
          alt="img"
        />
        <h1 data-testid="recipe-title">{returnDrinkDetails().strDrink}</h1>
        <ShareBtn />
        <FavoriteBtn />
        <p data-testid="instructions">{returnDrinkDetails().strInstructions}</p>
        <p data-testid="recipe-category">
          {returnDrinkDetails().strAlcoholic}
        </p>
        <p>
          {list()}
        </p>
        {(isRecipeDone(params.id) === false) ? (
          <Link to={ `/bebidas/${params.id}/in-progress` }>
            <Button
              className="btnstart"
              type="button"
              data-testid="start-recipe-btn"
            >
              Iniciar Receita
            </Button>
          </Link>
        ) : ('') }
      </div>
      <CardsFood />
    </div>
  );
}
