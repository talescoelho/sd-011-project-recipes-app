import React, { useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';

import { InputGroup, Form, Button } from 'react-bootstrap';
import MyContext from '../context/MyContext';
import searchIcon from '../images/searchIcon.svg';

export default function SearchBar() {
  const initialState = {
    searchTerms: '',
    searchParameter: '',
    validation: true,
  };

  const {
    foodsSearchLinks,
    drinksSearchLinks,
    data,
    setData,
  } = useContext(MyContext);

  const { pathname } = useLocation();

  const [searchLinks] = useState(() => {
    if (pathname === '/comidas') {
      return foodsSearchLinks;
    } if (pathname === '/bebidas') {
      return drinksSearchLinks;
    }
  });

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
    console.log(searchLinks);
    const { searchParameter, searchTerms } = searchInputs;
    if (searchParameter === 'firstLetter' && firstLetterValidation()) {
      const search = async () => {
        const { firstLetter } = searchLinks;
        const response = await fetch(`${firstLetter}${searchTerms}`);
        const json = await response.json();
        setData({ ...data, results: json });
      };
      search();
    }
    if (searchParameter === 'name') {
      const search = async () => {
        const { name } = searchLinks;
        const response = await fetch(`${name}${searchTerms}`);
        const json = await response.json();
        setData({ ...data, results: json });
      };
      search();
    }
    if (searchParameter === 'ingredient') {
      const search = async () => {
        const { ingredient } = searchLinks;
        const response = await fetch(`${ingredient}${searchTerms}`);
        const json = await response.json();
        setData({ ...data, results: json });
      };
      search();
    }
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
