import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { fetchDrink } from '../services/DrinksApi';
import '../styles/FoodDetails.css';

export default function FoodDrinks() {
  const params = useParams();
  const [drink, setDrink] = useState();
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
    const getDrink = async () => {
      const data = await fetchDrink(params.id);
      setDrink(data);
      console.log(data);
    };
    getDrink();
  }, [params.id]);

  const returnDrink = (index) => (drink ? drink.drinks[index] : '');

  function cardsDrinks() {
    const drinks = [];
    const drinksMax = 6;

    for (let index = 0; index < drinksMax; index += 1) {
      if (returnDrink(index) !== '') {
        drinks.push(
          <div
            data-testid={ `${index}-recomendation-card` }
            className="card"
            key={ `${index}-card-drink` }
          >
            <img
              className="imgdrinks"
              src={ returnDrink(index).strDrinkThumb }
              alt="imagem drink"
            />
            <p>{returnDrink(index).strAlcoholic}</p>
            <p
              data-testid={ `${index}-recomendation-title` }
            >
              {returnDrink(index).strDrink}
            </p>
          </div>,
        );
      }
    }

    return drinks;
  }
  return (
    <Carousel responsive={ responsive }>
      { cardsDrinks() }
    </Carousel>
  );
}
