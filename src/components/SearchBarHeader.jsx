import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';

function SearchBarHeader({ foodOrDrink }) {
  const [filterRadio, setFilterRadio] = useState('s');
  const [filterText, setFilterText] = useState('');
  const [filteredItem, setFilteredItem] = useState([]);

  const history = useHistory();
  const maxLength = 12;

  async function fetchFood() {
    let endPoint = `https://www.themealdb.com/api/json/v1/1/search.php?${filterRadio}=${filterText}`;
    if (filterRadio === 'i') {
      endPoint = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${filterText}`;
    }
    const request = await fetch(endPoint);
    const response = await request.json();
    const data = response.meals;
    if (data !== null) {
      setFilteredItem(data);
      document.getElementById('form').reset();
      if (data.length === 1) {
        history.push(`/comidas/${data[0].idMeal}`);
      }
    } else {
      alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
    }
  }

  async function fetchDrink() {
    let endPoint = `https://www.thecocktaildb.com/api/json/v1/1/search.php?${filterRadio}=${filterText}`;
    if (filterRadio === 'i') {
      endPoint = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${filterText}`;
    }
    const request = await fetch(endPoint);
    const response = await request.json();
    const data = response.drinks;
    if (data !== null) {
      setFilteredItem(data);
      document.getElementById('form').reset();
      if (data.length === 1) {
        history.push(`/bebidas/${data[0].idDrink}`);
      }
    } else {
      alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
    }
  }

  function renderRecipes(item, index) {
    return (
      <div data-testid={ `${index}-recipe-card` } key={ index }>
        <img
          src={ foodOrDrink === 'Comidas' ? item.strMealThumb : item.strDrinkThumb }
          alt="food_image"
          data-testid={ `${index}-card-img` }
        />
        <p data-testid={ `${index}-card-name` }>
          {foodOrDrink === 'Comidas' ? item.strMeal : item.strDrink}
        </p>
      </div>
    );
  }

  useEffect(() => {
    if (filterRadio === 'f' && filterText.length > 1) {
      alert('Sua busca deve conter somente 1 (um) caracter');
    }
  }, [filterText]);

  useEffect(() => {
    console.log(filteredItem);
  }, [filteredItem]);

  return (
    <main>

      <form id="form">
        <input
          type="text"
          placeholder="Buscar Receita"
          data-testid="search-input"
          onChange={ (e) => setFilterText(e.target.value) }
        />
        <label htmlFor="ingredient">
          <input
            type="radio"
            id="ingredient"
            name="radiosFilter"
            data-testid="ingredient-search-radio"
            value="i"
            onClick={ (e) => setFilterRadio(e.target.value) }
          />
          Ingrediente
        </label>
        <label htmlFor="name">
          <input
            type="radio"
            id="name"
            name="radiosFilter"
            data-testid="name-search-radio"
            value="s"
            onClick={ (e) => setFilterRadio(e.target.value) }
          />
          Nome
        </label>
        <label htmlFor="firstLetter">
          <input
            type="radio"
            id="firstLetter"
            name="radiosFilter"
            data-testid="first-letter-search-radio"
            value="f"
            onClick={ (e) => setFilterRadio(e.target.value) }
          />
          Primeira letra
        </label>
        <button
          type="button"
          data-testid="exec-search-btn"
          onClick={ foodOrDrink === 'Comidas' ? fetchFood : fetchDrink }
        >
          Buscar
        </button>
      </form>
      <div>
        {filteredItem.length > 1 && (
          filteredItem.filter((item, index) => index < maxLength).map(renderRecipes)
        )}
      </div>
    </main>
  );
}

export default SearchBarHeader;

SearchBarHeader.propTypes = {
  foodOrDrink: PropTypes.string.isRequired,
};
