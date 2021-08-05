import React, { useState, useContext } from 'react';
import { InputGroup, Form, Button } from 'react-bootstrap';
import MyContext from '../context/MyContext';
import searchIcon from '../images/searchIcon.svg';

export default function SearchBar() {
  const initialState = {
    searchTerms: '',
    searchParameter: '',
    validation: true,
  };

  const { searchLinks } = useContext(MyContext);
  console.log(searchLinks);

  const [searchInputs, setSearchInputs] = useState(initialState);

  const onChangeTextInput = ({ target: { value } }) => {
    setSearchInputs({ ...searchInputs, searchTerms: value });
  };

  const onChangeParameterInput = ({ target: { value } }) => {
    setSearchInputs({ ...searchInputs, searchParameter: value });
    console.log(searchInputs);
  };

  const firstLetterValidation = () => {
    const { searchTerms } = searchInputs;
    const resultValidation = (searchTerms.length === 1);
    setSearchInputs({ ...searchInputs, validation: resultValidation });
    return resultValidation;
  };

  const onClickHandler = () => {
    const { searchParameter } = searchInputs;
    if (searchParameter === 'firstLetter' && firstLetterValidation()) {
      console.log('pesquisou');
    }
    console.log(searchInputs);
  };

  return (
    <Form>
      <InputGroup size="lg">
        <InputGroup.Text>
          <img src={ searchIcon } alt="icone de uma lupa" />
        </InputGroup.Text>
        <Form.Control
          data-testid="search-input"
          type="text"
          onChange={ (event) => onChangeTextInput(event) }
        />
      </InputGroup>
      {
        !searchInputs.validation
          && (
            <p>só uma letra bacana</p>
          )
      }

      <Form.Group onChange={ (event) => onChangeParameterInput(event) }>
        <Form.Check
          data-testid="ingredient-search-radio"
          type="radio"
          inline
          name="category"
          label="Ingrediente"
          value="ingredient"
        />
        <Form.Check
          data-testid="name-search-radio"
          type="radio"
          inline
          name="category"
          label="Nome"
          value="name"
        />
        <Form.Check
          data-testid="first-letter-search-radio"
          type="radio"
          inline
          name="category"
          value="firstLetter"
          label="Primeira letra"
        />
      </Form.Group>

      <Button
        data-testid="exec-search-btn"
        type="button"
        variant="primary"
        size="lg"
        onClick={ () => onClickHandler() }
      >
        Block level button
      </Button>

    </Form>
  );
}
