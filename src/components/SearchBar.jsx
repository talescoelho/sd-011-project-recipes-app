import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
import SearchContext from '../context/Context';

function SearchBar() {
  const { register, handleSubmit, watch } = useForm();
  const {
    handleClickIngrediente, handleClickRadio, filterIngrediente, filterFood,
  } = useContext(SearchContext);

  const ingrediente = watch('ingrediente');
  const nome = watch('nome');
  const letra = watch('letra');

  const submitForm = (data) => {
    console.log(data);
  };

  return (
    <Form onSubmit={ handleSubmit(submitForm) }>
      <Form.Group>
        <Form.Control
          name="ingrediente"
          data-testid="search-input"
          placeholder="Buscar Receita"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>
          Ingrediente
          <Form.Check
            inline
            data-testid="ingredient-search-radio"
            type="radio"
            { ...register('ingrediente') }
          />
        </Form.Label>
        <Form.Label>
          Nome
          <Form.Check
            inline
            data-testid="name-search-radio"
            type="radio"
            { ...register('nome') }
          />
        </Form.Label>
        <Form.Label>
          Primeira Letra
          <Form.Check
            inline
            data-testid="first-letter-search-radio"
            type="radio"
            { ...register('letra') }
          />
        </Form.Label>
      </Form.Group>
      <Button
        type="submit"
        variant="outline-secondary"
        data-testid="exec-search-btn"
      >
        Buscar
      </Button>
    </Form>
  );
}

export default SearchBar;
