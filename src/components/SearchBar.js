import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

function SearchBar() {
  const [selected, setSelected] = useState('');
  const [search, setSearch] = useState('');
  const [, setFoods] = useState([]);

  const fetchFoodsIng = (ingrediente, what) => {
    fetch(`https://www.the${what().type}db.com/api/json/v1/1/filter.php?i=${ingrediente}`)
      .then((resp) => resp.json())
      .then((jsonObj) => setFoods(jsonObj[what().key]));
  };

  const fetchFoodsNam = (name, what) => {
    fetch(`https://www.the${what().type}db.com/api/json/v1/1/search.php?s=${name}`)
      .then((resp) => resp.json())
      .then((jsonObj) => setFoods(jsonObj[what().key]));
  };

  const fetchFoodsFL = (fl, what) => (fl.length === 1
    ? fetch(`https://www.the${what().type}db.com/api/json/v1/1/search.php?f=${fl}`)
      .then((resp) => resp.json())
      .then((jsonObj) => setFoods(jsonObj[what().key]))
    : alert('Sua busca deve conter somente 1 (um) caracter'));

  const switcher = () => {
    switch (selected) {
    case 'Ingrediente':
      fetchFoodsIng(search, foodOrDrink);
      break;
    case 'Nome':
      fetchFoodsNam(search, foodOrDrink);
      break;
    case 'Primeira letra':
      fetchFoodsFL(search, foodOrDrink);
      break;
    default:
      console.log(selected);
      break;
    }
  };

  if (foods.length > 0 && foods.length === 1) {
    const LOC = window.location.pathname;
    if (LOC === '/comidas') return <Redirect to={ `/comidas/${foods[0].idMeal}` } />;
    if (LOC === '/bebidas') return <Redirect to={ `/bebidas/${foods[0].idDrink}` } />;
  }

  return (
    <div>
      <div className="radios" onChange={ ({ target }) => setSelected(target.value) }>
        <label htmlFor="radio">
          {' '}
          Ingrediente
          <input
            type="radio"
            data-testid="ingredient-search-radio"
            id="radio"
            name="radio"
            value="Ingrediente"
          />
        </label>
        <label htmlFor="radio">
          {' '}
          Nome
          <input
            type="radio"
            data-testid="name-search-radio"
            id="radio"
            name="radio"
            value="Nome"
          />
        </label>
        <label htmlFor="radio">
          {' '}
          Primeira letra
          <input
            type="radio"
            data-testid="first-letter-search-radio"
            id="radio"
            name="radio"
            value="Primeira letra"
          />
        </label>
      </div>
      <label htmlFor="search">
        <input
          type="text"
          data-testid="search-input"
          id="search"
          onChange={ ({ target }) => setSearch(target.value) }
        />
      </label>
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ switcher }
      >
        Busca
      </button>
    </div>
  );
}

export default SearchBar;
