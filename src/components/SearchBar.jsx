import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
// import { sendFormData } from '../Redux/actions';
import { sendFormData } from '../Redux/reducers/recipes';

function SearchBar() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const submitForm = (data) => {
    dispatch(sendFormData(data));
  };

  return (
    <Form onSubmit={ handleSubmit(submitForm) } className="search-form">
      <Form.Group>
        <Form.Control
          className="search-input"
          name="ingrediente"
          data-testid="search-input"
          placeholder="Buscar Receita"
          { ...register('query') }
        />
      </Form.Group>
      <Form.Group>
        <Form.Label className="col-3">
          Ingrediente
          <Form.Check
            value="ingredient"
            data-testid="ingredient-search-radio"
            type="radio"
            { ...register('type') }
          />
        </Form.Label>
        <Form.Label className="col-3">
          Nome
          <Form.Check
            value="name"
            data-testid="name-search-radio"
            type="radio"
            { ...register('type') }
          />
        </Form.Label>
        <Form.Label className="col-3">
          Letra
          <Form.Check
            value="letra"
            data-testid="first-letter-search-radio"
            type="radio"
            { ...register('type') }
          />
        </Form.Label>
        <Button
          className="col-3"
          type="submit"
          variant="outline-secondary"
          data-testid="exec-search-btn"
        >
          Buscar
        </Button>
      </Form.Group>

    </Form>
  );
}

export default SearchBar;
