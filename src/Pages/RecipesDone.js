import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import DoneShareButton from '../Components/DoneShareButton ';

export default function RecipesDone() {
  const recipesDone = JSON.parse(localStorage.getItem('doneRecipes'));
  const [doneRecipes, setDoneRecipes] = useState(recipesDone);

  const doneRecipesFilter = (type) => {
    if (type === 'all') {
      setDoneRecipes(recipesDone);
    } else {
      const filteredResult = recipesDone.filter((item) => item.type === type);
      setDoneRecipes(filteredResult);
    }
  };

  function showTag(item1, index1) {
    if (item1.type === 'comida') {
      return (
        item1.tags.map((tagItem, tagIndex) => (
          <p data-testid={ `${index1}-${tagItem}-horizontal-tag` } key={ tagIndex }>
            {tagItem}
          </p>
        ))
      );
    }
  }

  return (
    <div>
      <Header title="Receitas Feitas" />
      <section>
        <button
          type="button"
          data-testid="filter-by-all-btn"
          onClick={ () => doneRecipesFilter('all') }
        >
          All
        </button>
        <button
          type="button"
          data-testid="filter-by-food-btn"
          onClick={ () => doneRecipesFilter('comida') }
        >
          Food
        </button>
        <button
          type="button"
          data-testid="filter-by-drink-btn"
          onClick={ () => doneRecipesFilter('bebida') }
        >
          Drink
        </button>
      </section>
      {
        recipesDone ? doneRecipes.map((item, index) => {
          if (item.type === 'comida') {
            return (
              <section>
                <Link to={ `/comidas/${item.id}` }>
                  <img
                    data-testid={ `${index}-horizontal-image` }
                    alt="recipe"
                    src={ item.image }
                  />
                </Link>
                <section>
                  <DoneShareButton />
                  <Link to={ `/comidas/${item.id}` }>
                    <h4 data-testid={ `${index}-horizontal-name` }>{ item.name }</h4>
                  </Link>
                  <p data-testid={ `${index}-horizontal-top-text` }>
                    {`${item.area} - ${item.category}` }
                  </p>
                  <p data-testid={ `${index}-horizontal-done-date` }>{ item.doneDate }</p>
                  { showTag(item, index) }
                </section>
              </section>
            );
          }
          return (
            <section key={ index }>
              <Link to={ `/bebidas/${item.id}` }>
                <img
                  width="200px"
                  data-testid={ `${index}-horizontal-image` }
                  alt="recipe"
                  src={ item.image }
                />
              </Link>
              <section>
                <DoneShareButton />
                <Link to={ `/bebidas/${item.id}` }>
                  <h4 data-testid={ `${index}-horizontal-name` }>{ item.name }</h4>
                </Link>
                <p
                  data-testid={ `${index}-horizontal-top-text` }
                >
                  { item.alcoholicOrNot }
                </p>
                <b />
                <p data-testid={ `${index}-horizontal-done-date` }>{ item.doneDate }</p>
              </section>
            </section>
          );
        }) : null
      }
    </div>
  );
}
