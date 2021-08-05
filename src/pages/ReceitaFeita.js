import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import shareIcon from '../images/shareIcon.svg';

export default function ReceitaFeita() {
  const [doneRecipe, setDoneRecipe] = useState();

  const doneRecipesStorage = JSON.parse(localStorage.getItem('doneRecipes'));

  function getStorage(func) {
    if (localStorage.doneRecipes) {
      func(doneRecipesStorage);
    }
  }

  useEffect(() => {
    getStorage(setDoneRecipe);
  }, []);

  function renderBtns() {
    return (
      <div>
        <button type="button" data-testid="filter-by-all-btn">All</button>
        <button type="button" data-testid="filter-by-food-btn">Food</button>
        <button type="button" data-testid="filter-by-drink-btn">Drinks</button>
      </div>);
  }

  return (
    <div>
      <Header lupa={ false } text="Receitas Feitas" />
      {renderBtns()}
      {doneRecipe && doneRecipe.map((rec, index) => {
        if (rec.type === 'comida') {
          console.log(index)
          return (
            <div key={ index }>
              <img
                src={ rec.image }
                alt={ rec.name }
                data-testid={ `${index}-horizontal-image` }
                width="100px"
              />
              <p data-testid={ `${index}-horizontal-top-text` }>{`${rec.area} - ${rec.category}`}</p>
              <h3 data-testid={ `${index}-horizontal-name` }>{rec.name}</h3>
              <h4 data-testid={ `${index}-horizontal-done-date` }>{rec.doneDate}</h4>
              <button type="button">
                <img src={ shareIcon } alt="btnShare" data-testid={ `${index}-horizontal-share-btn` } />
              </button>
              {rec.tags ? rec.tags.map((tag, indexTag) => (
                <span key={ indexTag } data-testid={ `${index}-${tag}-horizontal-tag` }>
                  {tag}
                </span>)) : null}
            </div>
          );
        }
        return (
          <div key={ index }>
            <img
              src={ rec.image }
              alt={ rec.name }
              data-testid={ `${index}-horizontal-image` }
              width="100px"
            />
            <h4 data-testid={ `${index}-horizontal-top-text` }>{rec.category}</h4>
            { rec.alcoholicOrNot !== '' ? <p data-testid={ `${index}-horizontal-top-text` }>{rec.alcoholicOrNot}</p> : null }
            <h3 data-testid={ `${index}-horizontal-name` }>{rec.name}</h3>
            <h4 data-testid={ `${index}-horizontal-done-date` }>{rec.doneDate}</h4>
            <button type="button">
              <img src={ shareIcon } alt="btnShare" data-testid={ `${index}-horizontal-share-btn` } />
            </button>
            {rec.tags ? rec.tags.map((tag, indexTag) => (
              <span key={ indexTag } data-testid={ `${index}-${tag}-horizontal-tag` }>
                {tag}
              </span>)) : null}
          </div>
        );
      })}
    </div>
  );
}
