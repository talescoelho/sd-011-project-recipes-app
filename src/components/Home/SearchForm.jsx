import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { fetchRecipes, fetchCocktails, useRecipes } from '../../hooks';

function SearchForm({ type }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ingrediente');
  const { recipes } = useRecipes();
  const dispatch = useDispatch();

  const handleSelectCategory = ({ target }) => setSelectedCategory(target.value);

  const fetchOnline = () => {
    if (type === 'meals') {
      dispatch(fetchRecipes({ category: selectedCategory, searchTerm }));
    } else {
      dispatch(fetchCocktails({ category: selectedCategory, searchTerm }));
    }
  };

  const handleSubmitSearch = (event) => {
    event.preventDefault();
    if (selectedCategory === 'primeira_letra' && searchTerm.length >= 2) {
      alert('Sua busca deve conter somente 1 (um) caracter');
      return;
    }
    fetchOnline();
  };

  if (recipes && recipes.length === 1) {
    return <Redirect to={ `/comidas/${recipes[0].idMeal}` } />;
  }
  return (
    <form onSubmit={ handleSubmitSearch }>
      <input
        type="text"
        value={ searchTerm }
        onChange={ ({ target }) => setSearchTerm(target.value) }
        data-testid="search-input"
      />
      <br />
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
