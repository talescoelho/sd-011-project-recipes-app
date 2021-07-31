import React, { useContext } from 'react';
import MainContext from '../Context/MainContext';

function SearchBar() {
  const { setInputSearch,
    setRadioBtn,
    page,
    fetchFood,
    fetchDrink,
    radioBtn } = useContext(MainContext);

  function handleOnClick() {
    if (page === 'foods') {
      fetchFood();
    }
    if (page === 'drinks') {
      fetchDrink();
    }
  }

  function handleChangeInput(value) {
    setInputSearch(value);
    if (radioBtn === 'letter' && value.length > 1) {
      global.alert('Sua busca deve conter somente 1 (um) caracter');
    }
  }

  return (
    <>
      <input
        data-testid="search-input"
        onChange={ ({ target: { value } }) => handleChangeInput(value) }
      />
      <br />
      <label htmlFor="ingredient">
        <input
          type="radio"
          data-testid="ingredient-search-radio"
          name="typeSearch"
          value="ingredient"
          id="ingredient"
          onChange={ ({ target: { value } }) => setRadioBtn(value) }
        />
        Ingredient
      </label>
      <label htmlFor="name">
        <input
          type="radio"
          data-testid="name-search-radio"
          name="typeSearch"
          value="name"
          id="name"
          onChange={ ({ target: { value } }) => setRadioBtn(value) }
        />
        Name
      </label>
      <label htmlFor="letter">
        <input
          type="radio"
          data-testid="first-letter-search-radio"
          name="typeSearch"
          value="letter"
          id="letter"
          onChange={ ({ target: { value } }) => setRadioBtn(value) }
        />
        Letter
      </label>
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ () => handleOnClick() }
      >
        Search
      </button>
    </>
  );
}

export default SearchBar;
