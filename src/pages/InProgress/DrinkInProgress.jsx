import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import copy from 'clipboard-copy';
import FavoriteButtonDrinks from '../../globalComponents/FavoriteButtonDrinks';
import shareIcon from '../../images/shareIcon.svg';

function DrinkInProgress({ match }) {
  const { id } = match.params;
  const [ingredients, setIngredients] = useState([]);
  console.log(ingredients);
  const [favorite, setFavorite] = useState(false);
  const [checked, setChecked] = useState({});
  const [copied, setCopied] = useState(false);
  const [disable, setDisable] = useState(true);

  useEffect(() => {
    const cached = localStorage.getItem('checkings');
    const parsed = JSON.parse(cached);
    if (parsed) setChecked(parsed);
  }, []);

  useEffect(() => {
    localStorage.setItem('checkings', JSON.stringify(checked));
    const inputCheckboxs = document.querySelectorAll('input');
    const hasValues = Object.values(checked).length === inputCheckboxs.length;
    const verifyChecked = hasValues && Object
      .values(checked).every((item) => item === true);
    if (verifyChecked) setDisable(false);
    if (!verifyChecked) setDisable(true);
  }, [checked]);

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((result) => result.json())
      .then((result) => {
        setIngredients(result.drinks);
      });
    const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    const favorites = favoriteRecipes && favoriteRecipes.some((item) => item.id === id);
    if (favorites) {
      setFavorite(true);
    }
  }, [id]);

  function toList(line) {
    const magicNumber = 20;
    const ingredientList = new Array(magicNumber).fill().map((_, i) => {
      const ingredientKey = `strIngredient${i + 1}`;
      const measureKey = `strMeasure${i + 1}`;
      return [line[ingredientKey], line[measureKey]];
    }).filter(([ingredient, measure]) => {
      if (ingredient && measure) {
        return [ingredient, measure];
      }
      return null;
    });
    return { ...line, ingredientList };
  }

  const shareButtonHandle = () => {
    setCopied(true);
    const mSeconds = 2000;
    copy(`http://localhost:3000/bebidas/${id}`);
    setTimeout(() => {
      setCopied(false);
    }, mSeconds);
  };

  function handleFinish() {
    const objectStorage = {
      id,
      type: 'bebida',
      area: '',
      category: ingredients[0].strCategory ? ingredients[0].strCategory : '',
      alcoholicOrNot: ingredients[0].strAlcoholic ? ingredients[0].strAlcoholic : '',
      name: ingredients[0].strDrink,
      image: ingredients[0].strDrinkThumb,
      doneDate: window.Date(),
      tags: ingredients[0].strTags ? [ingredients[0].strTags] : '',
    };
    const prevStorage = JSON.parse(localStorage.getItem('doneRecipes'));
    if (prevStorage === null) {
      localStorage.setItem('doneRecipes',
        JSON.stringify([objectStorage]));
    } else if (prevStorage !== null) {
      localStorage.setItem('doneRecipes',
        JSON.stringify([...prevStorage, objectStorage]));
    }
    setChecked({});
    localStorage.setItem('checking', '');
  }

  return (
    <div>
      {ingredients && ingredients.map(toList)
        .map(({ ingredientList, ...drink }, index) => (
          <div key={ index }>
            <img data-testid="recipe-photo" src={ drink.strDrinkThumb } alt="" />
            <p data-testid="recipe-title">{drink.strMeal}</p>
            <p data-testid="recipe-category">{drink.strCategory}</p>
            <button
              data-testid="share-btn"
              type="button"
              onClick={ shareButtonHandle }
            >
              <img src={ shareIcon } alt="share" />
            </button>
            <FavoriteButtonDrinks
              drinks={ ingredients[0] }
              favorite={ favorite }
              setFavorite={ setFavorite }
              id={ id }
            />
            <p>{copied ? 'Link copiado!' : null}</p>

            {ingredientList.map(([ingredient, measure], i) => (
              <div key={ i } data-testid={ `${i}-ingredient-step` }>
                <span>{ingredient}</span>
                :
                <span>{ measure }</span>
                <input
                  type="checkbox"
                  checked={ checked[i.toString()] }
                  onClick={ (event) => setChecked({ ...checked,
                    [i]: event.target.checked }) }
                />
              </div>
            ))}
            <p>instructions:</p>
            <p data-testid="instructions">{drink.strInstructions}</p>
            <Link to="/receitas-feitas">
              <button
                type="button"
                data-testid="finish-recipe-btn"
                disabled={ disable }
                onClick={ handleFinish }
              >
                Finalizar Receita
              </button>
            </Link>
            <br />
          </div>
        ))}
    </div>
  );
}

DrinkInProgress.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default DrinkInProgress;
