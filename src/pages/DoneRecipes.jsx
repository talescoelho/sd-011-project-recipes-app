import React from 'react';
import { Button, Form } from 'react-bootstrap';
import Header from '../components/Header';

export default function DoneRecipes() {
  return (
    <>
      <Header pageName="Receitas Feitas" />
      <main>
        <Form className="d-flex justify-content-evenly mt-4">
          <Button data-testid="filter-by-all-btn">All</Button>
          <Button data-testid="filter-by-food-btn">Food</Button>
          <Button data-testid="filter-by-drink-btn">Drinks</Button>
        </Form>
      </main>
    </>
  );
}
