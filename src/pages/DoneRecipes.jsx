import React from 'react';
import { Button, Form } from 'react-bootstrap';
import useLocalStorage from 'use-local-storage-state';
import Header from '../components/Header';
import DoneRecipeCard from '../components/DoneRecipeCard';
import '../styles/doneRecipes.css';

export default function DoneRecipes() {
  const [doneRecipes] = useLocalStorage('doneRecipes', []);
  const cardsToRender = (cardsRender) => (
    cardsRender.length !== 0 && cardsRender.map((el, index) => (
      (
        <DoneRecipeCard key={ index } { ...{ el, index } } />
      ))));

  return (
    <>
      <Header pageName="Receitas Feitas" />
      <main>
        <Form className="d-flex justify-content-evenly mt-4 mb-3">
          <Button data-testid="filter-by-all-btn">All</Button>
          <Button data-testid="filter-by-food-btn">Food</Button>
          <Button data-testid="filter-by-drink-btn">Drinks</Button>
        </Form>
        <div className="done-recipe">{cardsToRender(doneRecipes)}</div>
      </main>
    </>
  );
}
