import PropTypes from 'prop-types';
import React, { useState, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Foods, Cocktails } from '../services';
import SearchBarContext from '../context/searchBarContext';

function SearchBar({ type }) {
  const [searchType, setSearchType] = useState(null);
  const [searchInput, setSearchInput] = useState(null);
  const { setData } = useContext(SearchBarContext);

  async function filterSearch() {
    if (searchType && searchInput) {
      console.log(searchType);
      console.log(searchInput);
      if (type.includes('Comidas')) setData(await Foods[searchType](searchInput));
      if (type.includes('Bebidas')) setData(await Cocktails[searchType](searchInput));
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
        style={ { backgroundColor: type.includes('ebida') ? '#a73d7e' : '#fcdc4d' } }
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
