import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { string } from 'prop-types';
import { getDrink, getFood } from '../Services/FetchApi';
import MyContext from '../Context/MyContext';
import CardRecipes from './CardRecipes';
import './Recomended.css';

function RecomendedRecipes({ origem }) {
  const { cards, setCards } = useContext(MyContext);

  const busca = async () => {
    if (origem === 'http://localhost:3000/details-recipe') {
      const resposta = await getDrink();
      setCards(resposta.drinks);
    } else {
      const resposta = await getFood();
      setCards(resposta.meals);
    }
  };

  useEffect(() => {
    busca();
  }, []);

  const renderCardRecipes = () => {
    const showMaxRecipes = 6;
    if (cards) {
      const filteredRecipe = cards.filter(
        (item, index) => index < showMaxRecipes,
      );
      return filteredRecipe;
    }
  };
  if (origem === 'http://localhost:3000/details-recipe') {
    return (
      <div className="slider">
        {cards.length > 0 && renderCardRecipes().map((recp, index) => (
          <Link
            className="recomendation-card"
            key={ index }
            to="/bebidas/drink-details"
          >
            <CardRecipes
              key={ index }
              index={ index }
              thumb={ recp.strDrinkThumb }
              title={ recp.strDrink }
            />
          </Link>
        ))}
      </div>);
  }
  return (
    <div className="cardlist">
      {cards.length > 0 && renderCardRecipes().map((recp, index) => (
        <Link
          className="recomendation-card"
          key={ index }
          to="/bebidas/details-recipe"
        >
          <CardRecipes
            key={ index }
            index={ index }
            thumb={ recp.strMealThumb }
            title={ recp.strMeal }
          />
        </Link>
      ))}
    </div>);
}

export default RecomendedRecipes;

RecomendedRecipes.propTypes = {
  origem: string,
}.isRequired;
