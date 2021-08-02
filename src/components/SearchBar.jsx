import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import SearchContext from '../Context';

function SearchBar() {
  const { register, handleSubmit, watch } = useForm();
  const {
    handleClickIngrediente, handleClickRadio, filterIngrediente, filterFood,
  } = useContext(SearchContext);

  return (
    <form>
      <label htmlFor="input">
        <input
          name="ingrediente"
          id="input"
          data-testid="search-input"
          placeholder="Buscar Receita"
          onChange={ handleClickIngrediente }
          value={ filterIngrediente }
        />
      </label>
      <label htmlFor="radio">
        <input
          name="radio"
          id="ingrediente"
          data-testid="ingredient-search-radio"
          type="radio"
          onChange={ handleClickRadio }
          value="ingrediente"

        />
        Ingrediente
        <input
          name="radio"
          id="nome"
          data-testid="name-search-radio"
          type="radio"
          onChange={ handleClickRadio }
          value="nome"
        />
        Nome
        <input
          name="radio"
          id="letra"
          data-testid="first-letter-search-radio"
          type="radio"
          onChange={ handleClickRadio }
          value="letra"

        />
        Primeira Letra
      </label>
      <button type="submit" data-testid="exec-search-btn" onClick={ filterFood }>
        Buscar
      </button>
    </form>
  );
}

export default SearchBar;
