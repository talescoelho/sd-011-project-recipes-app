import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { SearchBarContext } from '../context/SearchBar';
import fetchByFilter from '../services/data';

export default function SearchBar(props) {
  const [input, setInput] = useState('');
  const [radio, setRadio] = useState('');
  const { setData, data } = useContext(SearchBarContext);
  const history = useHistory();

  const { fetchType } = props;

  useEffect(() => {
    const dataValues = Object.values(data)[0]; // Pega a primeira posição dos valores de data, onde ficam todos os objectos de receitas
    if (dataValues && dataValues.length === 1) {
      let id;
      let url;
      switch (fetchType) {
      case 'themealdb':
        id = dataValues[0].idMeal; // Pega id da receita na posição 0
        url = 'comidas';
        break;
      case 'thecocktaildb':
        id = dataValues[0].idDrink;
        url = 'bebidas';
        break;
      default:
        break;
      }
      const path = `/${url}/${id}`;
      history.push(path);
    }
  }, [data, fetchType, history]);

  const handleClick = async () => {
    const urlToFetch = `https://www.${fetchType}.com/api/json/v1/1/${radio}${input}`;

    const dataFromApi = await fetchByFilter(urlToFetch);
    setData(dataFromApi);
  };

  return (
    <section>
      <label htmlFor="search-input">
        <input
          id="search-input"
          type="text"
          data-testid="search-input"
          value={ input }
          onChange={ (e) => setInput(e.target.value) }
        />
      </label>
      <label htmlFor="ingredient">
        <input
          name="search-type"
          id="ingredient"
          type="radio"
          data-testid="ingredient-search-radio"
          value="filter.php?i="
          onChange={ (e) => setRadio(e.target.value) }
        />
        Ingrediente
      </label>
      <label htmlFor="name">
        <input
          name="search-type"
          id="name"
          type="radio"
          data-testid="name-search-radio"
          value="search.php?s="
          onChange={ (e) => setRadio(e.target.value) }
        />
        Nome
      </label>
      <label htmlFor="first-letter">
        <input
          name="search-type"
          id="first-letter"
          type="radio"
          data-testid="first-letter-search-radio"
          value="search.php?f="
          onChange={ (e) => setRadio(e.target.value) }
        />
        Primeira letra
      </label>
      <button
        data-testid="exec-search-btn"
        type="button"
        onClick={ () => handleClick() }
      >
        Buscar
      </button>
    </section>
  );
}

SearchBar.propTypes = {
  fetchType: PropTypes.string,
}.isRequired;
