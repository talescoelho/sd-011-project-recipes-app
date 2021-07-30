import React, { useState } from 'react';
import Input from './Input';
import { useFetch } from '../hooks/useFetch';

function HeaderSearchBar() {
  const [searchInput, setSearchInput] = useState('');
  const [ingredientInput, setIngredientInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [firstLetterInput, setFirstLetterInput] = useState('');

  const fetchIngredients = () => {

  };

  return (
    <>
      <Input
        id="searchInput"
        name="searchInput"
        label="Buscar"
        data-testid="search-input"
        value={ searchInput }
        setValue={ setSearchInput }
      />
      <Input
        id="ingredientInput"
        label="Ingrediente"
        name="ingrediente"
        type="radio"
        data-testid="ingredient-search-radio"
        value={ ingredientInput }
      />
      <Input
        id="nameInput"
        label="Nome"
        name="nome"
        type="radio"
        data-testid="name-search-radio"
        value={ nameInput }
      />
      <Input
        id="firstLetterInput"
        label="Primeira Letra"
        name="firstLetterInput"
        type="radio"
        data-testid="first-letter-search-radio"
        value={ firstLetterInput }
      />
      <button
        type="button"
        data-testid="exec-search-btn"
      >
        Buscar
      </button>
    </>
  );
}

export default HeaderSearchBar;
