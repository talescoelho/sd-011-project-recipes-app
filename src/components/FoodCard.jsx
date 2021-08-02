import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';

export default function FoodCard() {
  const history = useHistory();
  const recipes = useSelector((state) => state.recipes);
  const { data } = recipes;

  console.log(recipes);

  useEffect(() => {

  }, []);

  const getCards = () => {
    if (data.length > 0) {
      return data.map((item, index) => {
        const { idMeal, strMeal, strMealThumb } = item;
        return (
          <Card key={ index }>
            <Card.Img variant="top" src={ strMealThumb } />
            <Card.Body>
              <Card.Title>{strMeal}</Card.Title>
              <Button onClick={ () => history.push(`/comidas/${idMeal}`) } variant="primary">Ver receita</Button>
            </Card.Body>
          </Card>);
      });
    }
  };

  return (
    <div>{ getCards()}</div>
  );
}
