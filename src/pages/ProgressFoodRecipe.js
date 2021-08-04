import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import copy from 'clipboard-copy';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import handleClickCheckbox from '../helpers/handleClickCheckbox';

export default function ProgressFoodRecipe(props) {
  const [data, setData] = useState([]);
  const [favorite, setFavorite] = useState(false);
  const [copied, setCopied] = useState('');
  const [disable, setDisable] = useState(true);
  const { history } = props;
  const { location } = history;
  const { pathname } = location;
  const toShare = pathname.replace('/in-progress', '');
  const id = pathname.split('/')[2];
  const [inProgress, setInProgress] = useState({ cocktails: {}, meals: {} });

  useEffect(() => {
    async function fetchFoodsById() {
      const endpoint = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
      const response = await fetch(endpoint);
      const json = await response.json();
      setData(json);
    }
    fetchFoodsById();
  }, [id]);

  const ingredientes = (data.length === 0) ? ''
    : Object.keys(data.meals[0])
      .filter((ingredient) => ingredient.includes('strIngredient'))
      .map((element) => data.meals[0][element])
      .filter((value) => value);

  useEffect(() => {
    const getLocalProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (localStorage.inProgressRecipes) {
      setInProgress(getLocalProgress);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('inProgressRecipes', JSON.stringify(inProgress));
    function finishRecipe() {
      if (inProgress.meals[id] && inProgress.meals[id].length === ingredientes.length) {
        setDisable(false);
      } else {
        setDisable(true);
      }
    }
    finishRecipe();
  }, [inProgress, id, ingredientes]);

  function handleShared() {
    copy(`http://localhost:3000${toShare}`);
    setCopied('Link copiado!');
  }

  function handleFavorite() {
    setFavorite(!favorite);
  }

  const paramFunction = {
    inProgress, setInProgress, id, type: 'meals',
  };
  return (
    <div>
      <h1>Progresso Comida</h1>
      {data.length === 0 ? <p>Loading...</p> : (
        <>
          <img
            data-testid="recipe-photo"
            src={ data.meals[0].strMealThumb }
            alt="foto da comida"
          />
          <h2 data-testid="recipe-title">{data.meals[0].strMeal}</h2>
          <button
            type="button"
            data-testid="share-btn"
            onClick={ handleShared }
          >
            <img src={ shareIcon } alt="compartilhar" />
          </button>
          {copied && <p>{ copied }</p>}
          <button
            type="button"
            onClick={ handleFavorite }
          >
            <img
              src={ !favorite ? whiteHeartIcon : blackHeartIcon }
              data-testid="favorite-btn"
              alt="favoritar"
            />
          </button>
          <p data-testid="recipe-category">
            {' '}
            {data.meals[0].strCategory}
          </p>
          <p>Ingredientes</p>
          {ingredientes.map((item, index) => (
            <div key={ index } data-testid={ `${index}-ingredient-step` }>
              <label
                htmlFor={ `${index}-ingredient-step` }
              >
                <input
                  type="checkbox"
                  id={ `${index}-ingredient-step` }
                  onClick={ (e) => handleClickCheckbox(e, item, paramFunction) }
                  checked={ inProgress.meals[id] && inProgress.meals[id]
                    .includes(item) }
                />
                {' '}
                { item }
              </label>
              <br />
            </div>
          ))}
          <br />
          <p data-testid="instructions">
            {' '}
            Instruções:
            <br />
            {data.meals[0].strInstructions}
          </p>
          <Link to="/receitas-feitas">
            <button
              type="button"
              data-testid="finish-recipe-btn"
              disabled={ disable }
            >
              Finalizar Receita
            </button>
          </Link>
        </>
      )}
    </div>
  );
}

ProgressFoodRecipe.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.shape({
        split: PropTypes.func,
      }),
    }),
  }),
}.isRequired;
