import React, { useState } from 'react';

function SearchBar() {
  const [selected, setSelected] = useState('');
  const [search, setSearch] = useState('');
  const [foods, setFoods] = useState([]);
  console.log(foods);

  const fetchFoodsIng = (ingrediente, what) => {
    fetch(`https://www.the${what()}db.com/api/json/v1/1/filter.php?i=${ingrediente}`)
      .then((resp) => resp.json())
      .then((jsonObj) => setFoods(jsonObj.meals));
  };

  const fetchFoodsNam = (name, what) => {
    fetch(`https://www.the${what()}db.com/api/json/v1/1/search.php?s=${name}`)
      .then((resp) => resp.json())
      .then((jsonObj) => setFoods(jsonObj.meals));
  };

  const fetchFoodsFL = (fl, what) => (fl.length === 1
    ? fetch(`https://www.the${what()}db.com/api/json/v1/1/search.php?f=${fl}`)
      .then((resp) => resp.json())
      .then((jsonObj) => setFoods(jsonObj.meals))
    : alert('Sua busca deve conter somente 1 (um) caracter'));

  const foodOrDrink = () => (window.location.pathname === '/comidas'
    ? 'meal' : 'cocktail');

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
