import React from 'react';
import { Button, Form, Card } from 'react-bootstrap';
import useLocalStorage from 'use-local-storage-state';
import Header from '../components/Header';

export default function DoneRecipes() {
  const [doneRecipes] = useLocalStorage('doneRecipes', []);
  console.log(doneRecipes);

  const cardsToRender = (cardsRender) => (
    cardsRender.length !== 0 && cardsRender.map((
      { category, image, type, area, alcoholicOrNot, id, name, tags, date }, index,
    ) => (
      (
        <Card key={ id } data-testid={ `${index}-recipe-card` }>
          <Card.Header
            data-testid={ `${index}-horizontal-top-text` }
          >
            {category}

          </Card.Header>
          <Card.Img
            variant="top"
            src={ image }
            data-testid={ `${index}-horizontal-image` }
          />
          <Card.Body>
            <Card.Title data-testid={ `${index}-horizontal-name` }>
              {name}
            </Card.Title>
            <Card.Text>{area || alcoholicOrNot}</Card.Text>
            <Card.Text data-testid={ `${index}-horizontal-done-date` }>{date}</Card.Text>
            <Card.Text
              data-testid={ `${index}-${tags}-horizontal-tag` }
            >
              {tags}

            </Card.Text>
          </Card.Body>
          <Card.Footer>
            {type}
          </Card.Footer>
        </Card>
      ))));

  return (
    <>
      <Header pageName="Receitas Feitas" />
      <main>
        <Form className="d-flex justify-content-evenly mt-4">
          <Button data-testid="filter-by-all-btn">All</Button>
          <Button data-testid="filter-by-food-btn">Food</Button>
          <Button data-testid="filter-by-drink-btn">Drinks</Button>
        </Form>
        {cardsToRender(doneRecipes)}
      </main>
    </>
  );
}
