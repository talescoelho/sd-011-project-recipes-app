import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { SearchBarContext } from '../context/SearchBar';
import fetchByFilter from '../services/data';
import Cards from './Cards';

export default function SearchBar(props) {
  const {
    setData,
    data,
    setShouldCallCards,
    shouldCallCards,
  } = useContext(SearchBarContext);

  const [input, setInput] = useState('');
  const [radio, setRadio] = useState('');
  const [recipeId, setRecipeId] = useState();
  const [dataValues, setDataValues] = useState();
  const [path, setPath] = useState();
  const [recipeType, setRecipeType] = useState();
  const { fetchType } = props;

  const history = useHistory();

  useEffect(() => {
    setDataValues(Object.values(data)[0]); // Pega a primeira posição dos valores de data, onde ficam todos os objectos de receitas
    console.log(dataValues);
  }, [data, dataValues]);

  useEffect(() => {
    if (dataValues && dataValues.length === 1) {
      if (fetchType === 'themealdb') {
        setRecipeType('comidas');
        setRecipeId(dataValues[0].idMeal);
      }
      if (fetchType === 'thecocktaildb') {
        setRecipeType('bebidas');
        setRecipeId(dataValues[0].idDrink);
      }
      setPath(`/${recipeType}/${recipeId}`);
      history.push(path);
    }
  }, [dataValues, fetchType, history, path, recipeId, recipeType]);

  useEffect(() => {
    if (dataValues && dataValues.length > 1) {
      setShouldCallCards(true);
    } else {
      setShouldCallCards(false);
    }
  }, [dataValues, setShouldCallCards]);

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
      <section>
        { shouldCallCards
          && dataValues.map((eachRecipe, index) => (
            <Cards
              recipe={ eachRecipe }
              type={ fetchType }
              index={ index }
              key={ index }
            />
          )) }
      </section>
    </section>
  );
}

SearchBar.propTypes = {
  fetchType: PropTypes.string,
}.isRequired;
