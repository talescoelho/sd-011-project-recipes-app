import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import useSearchContext from '../hooks/useSearchContext';

export default function FoodCard() {
  const { data } = useSearchContext();
  const history = useHistory();

  useEffect(() => {
    console.log(data);
  }, [data]);

  console.log(useSearchContext());
  const getCards = () => {
    if (data && data.length > 0) {
      return data.map((item, index) => {
        const { idMeal, strArea, strCategory, strMeal, strMealThumb } = item;
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
