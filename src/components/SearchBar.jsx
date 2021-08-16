import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

function SearchBar({ type }) {
  const [searchType, setSearchType] = useState(null);
  const [searchInput, setSearchInput] = useState(null);
  const dispatch = useDispatch();

  async function filterSearch() {
    if (searchType && searchInput) {
      dispatch({ type: 'SET_SEARCH', search: { type: searchType, key: searchInput } });
    }
  }

  return (
    <Form className="p-2 d-flex flex-column align-items-center bg-light border">
      <Form.Group controlId="exampleForm.ControlInput1" className="mb-3">
        <Form.Check
          inline
          label="Ingredientes"
          onClick={ ({ target }) => setSearchType(target.id) }
          type="radio"
          id="searchIngredient"
          name="search-type"
          data-testid="ingredient-search-radio"
        />
        <Form.Check
          inline
          label="Nome"
          onClick={ ({ target }) => setSearchType(target.id) }
          type="radio"
          id="searchName"
          name="search-type"
          data-testid="name-search-radio"
        />
        <Form.Check
          inline
          label="Primeira letra"
          onClick={ ({ target }) => setSearchType(target.id) }
          type="radio"
          id="searchLetter"
          name="search-type"
          data-testid="first-letter-search-radio"
        />
      </Form.Group>
      <Form.Control
        className="mb-2"
        size="sm"
        onChange={ ({ target }) => setSearchInput(target.value) }
        type="text"
        data-testid="search-input"
        placeholder="O que deseja pesquisar?"
      />
      <Button
        style={ { backgroundColor: type === 'drink' ? '#a73d7e' : '#fcdc4d' } }
        variant="light"
        size="sm"
        type="button"
        data-testid="exec-search-btn"
        onClick={ () => filterSearch() }
      >
        Pesquisar
      </Button>
    </Form>
  );
}

SearchBar.propTypes = {
  type: PropTypes.string.isRequired,
};

export default SearchBar;
