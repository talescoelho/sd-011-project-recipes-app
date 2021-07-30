import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchRecipes, fetchCocktails } from '../../hooks';

function SearchForm({ type }) {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ingrediente');

  const handleSelectCategory = ({ target }) => setSelectedCategory(target.value);

  const handleSubmitSearch = (event) => {
    event.preventDefault();
    if (type === 'meals') {
      dispatch(fetchRecipes({ category: selectedCategory, searchTerm }));
    } else {
      dispatch(fetchCocktails({ category: selectedCategory, searchTerm }));
    }
  };

  return (
    <form onSubmit={ handleSubmitSearch }>
      <input
        type="text"
        value={ searchTerm }
        onChange={ ({ target }) => setSearchTerm(target.value) }
        data-testid="search-input"
      />
      <label htmlFor="ingrediente">
        <input
          id="ingrediente"
          name="category"
          checked={ selectedCategory === 'ingrediente' }
          onChange={ handleSelectCategory }
          type="radio"
          value="ingrediente"
          data-testid="ingredient-search-radio"
        />
        Ingrediente
      </label>
      <label htmlFor="nome">
        <input
          id="nome"
          name="category"
          type="radio"
          checked={ selectedCategory === 'nome' }
          onChange={ handleSelectCategory }
          value="nome"
          data-testid="name-search-radio"
        />
        Nome
      </label>
      <label htmlFor="primeira_letra">
        <input
          id="primeira_letra"
          type="radio"
          checked={ selectedCategory === 'primeira_letra' }
          onChange={ handleSelectCategory }
          name="category"
          value="primeira_letra"
          data-testid="first-letter-search-radio"
        />
        Primeira letra
      </label>
      <button type="submit" data-testid="exec-search-btn">Buscar</button>
    </form>
  );
}

SearchForm.propTypes = {
  type: PropTypes.string.isRequired,
};

export default SearchForm;
