import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../styles/FoodDetails.scss';
import { fetchFoodCards } from '../services/FoodCards';

export default function DrinksFood() {
  const params = useParams();
  const [cardsFood, setCardsFood] = useState();
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  useEffect(() => {
    const getCard = async () => {
      const data = await fetchFoodCards(params.id);
      setCardsFood(data);
    };
    getCard();
  }, [params.id]);

  const returnCard = (index) => (cardsFood ? cardsFood.meals[index] : '');

  function FoodCard() {
    const cards = [];
    const cardsMax = 6;

    for (let index = 0; index < cardsMax; index += 1) {
      if (returnCard(index) !== '') {
        cards.push(
          <div data-testid={ `${index}-recomendation-card` } className="card">
            <img
              className="imgdrinks"
              src={ returnCard(index).strMealThumb }
              alt="imagem drink"
            />
            <p
              data-testid={ `${index}-recomendation-title` }
            >
              {returnCard(index).strMeal}
            </p>
            <p
              data-testid={ `${index}-recomendation-category` }
            >
              {returnCard(index).strCategory}
            </p>
          </div>,
        );
      }
    }

    return cards;
  }
  return (
    <Carousel responsive={ responsive }>
      { FoodCard() }
    </Carousel>
  );
}
