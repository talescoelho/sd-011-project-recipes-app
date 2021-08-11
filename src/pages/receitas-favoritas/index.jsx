import React, { useState, useEffect } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Spinner,
  Image,
} from 'react-bootstrap';
import Header from '../../components/Header';
import CopyButton from '../Details/CopyButton';

export default function ReceitasFavoritas(){
  let favoriteRecipes = window.localStorage.getItem('favoriteRecipes');
  favoriteRecipes = JSON.parse(favoriteRecipes)
  console.log(favoriteRecipes)
  return (
    <div>
      <Header title="Receitas Favoritas" />
      <Row>
      <Col className="col-12 mt-3 d-flex justify-content-around">
        <Button
          variant="light"
          //onClick={ () => setFilter('') }
          data-testid="filter-by-all-btn"
        >
          All
        </Button>
        <Button
          variant="light"
          //onClick={ () => setFilter('bebida') }
          data-testid="filter-by-food-btn"
        >
          Food
        </Button>
        <Button
          variant="light"
          //onClick={ () => setFilter('comida') }
          data-testid="filter-by-drink-btn"
        >
          Drinks
        </Button>
      </Col>
      </Row>
      {favoriteRecipes.map((item, index) => {
        const {
          id,
          type,
          area,
          category,
          alcoholicOrNot,
          name,
          image,
          doneDate,
          tags,
        } = item;
        let formatedCategory = alcoholicOrNot;
        if (type === 'comida') {
          formatedCategory = `${area} - ${category}`;
        }
        return (
          <div key={ index } className="d-flex mx-0 mb-3 bg-light rounded shadow-lg">
            <Image
              style={ { maxWidth: '160px' } }
              //onClick={ () => handleRedirect(type, id) }
              className="ml-0 rounded-left"
              data-testid={ `${index}-horizontal-image` }
              src={ item.image }
              fluid
            />
            <div className="d-flex flex-column">
            <Col>
              <span data-testid={ `${index}-horizontal-top-text` }>
                {formatedCategory}
              </span>
            </Col>
            <Col>
              <span data-testid={ `${index}-horizontal-name` }>{name}</span>
            </Col>
            <Col className="pb-2 justify-items-end">
                <CopyButton
                  testId={ `${index}-horizontal-share-btn` }
                  id={ id }
                  selector={ type }
                />
              </Col>

            </div>
          </div>
        )
      })}
    </div>

  );
}

// npm run cy -- --spec cypress/integration/favorite_recipes_spec.js

