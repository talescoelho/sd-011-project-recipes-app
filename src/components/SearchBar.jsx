import React from 'react';
import { InputGroup, Form, Button } from 'react-bootstrap';
import searchIcon from '../images/searchIcon.svg';

export default function SearchBar() {
  return (
    <Form>
      <InputGroup size="lg">
        <InputGroup.Text>
          <img src={ searchIcon } alt="icone de uma lupa" />
        </InputGroup.Text>
        <Form.Control data-testid="search-input" type="text" required />
        <Form.Control.Feedback type="invalid">
          Sua busca deve conter somente 1 (um) caracter
        </Form.Control.Feedback>
      </InputGroup>

      <Form.Group>
        <Form.Check
          data-testid="ingredient-search-radio"
          type="radio"
          inline
          name="category"
          label="Ingrediente"
        />
        <Form.Check
          data-testid="name-search-radio"
          type="radio"
          inline
          name="category"
          label="Nome"
        />
        <Form.Check
          data-testid="first-letter-search-radio"
          type="radio"
          inline
          name="category"
          label="Primeira letra"
        />
      </Form.Group>

      <Button
        data-testid="exec-search-btn"
        type="button"
        variant="primary"
        size="lg"
      >
        Block level button
      </Button>

    </Form>
  );
}
