import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

function RecipesDone() {
  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));

  const [filterRecipes, setFilterRecipes] = React.useState(doneRecipes);

  function filterByType(parameter) {
    if (parameter === 'all') {
      setFilterRecipes(doneRecipes && doneRecipes.filter(({ type }) => type));
    }
    if (parameter === 'food') {
      setFilterRecipes(doneRecipes
        && doneRecipes.filter(({ type }) => type === 'comida'));
    } if (parameter === 'drinks') {
      setFilterRecipes(doneRecipes
        && doneRecipes.filter(({ type }) => type === 'bebida'));
    }
  }

  return (
    <div>
      <Header title="Receitas Feitas" isSearch={ false } />
      <nav>
        <button
          type="button"
          data-testid="filter-by-all-btn"
          onClick={ () => filterByType('all') }
        >
          All
        </button>
        <button
          type="button"
          data-testid="filter-by-food-btn"
          onClick={ () => filterByType('food') }
        >
          Food
        </button>
        <button
          type="button"
          data-testid="filter-by-drink-btn"
          onClick={ () => filterByType('drinks') }
        >
          Drinks
        </button>
      </nav>
      {filterRecipes && filterRecipes
        .map(
          ({ id, type, area, category, alcoholicOrNot,
            name, image, doneDate, tags }, index) => (
            type === 'comida'
              ? (
                <div
                  key={ id }
                >
                  <div>
                    <Link to={ `/${type}s/${id}` }>
                      <img
                        src={ image }
                        alt="recipe"
                        data-testid={ `${index}-horizontal-image` }
                      />
                      <p
                        data-testid={ `${index}-horizontal-name` }
                      >
                        {name}
                      </p>
                    </Link>
                    <p data-testid={ `${index}-horizontal-top-text` }>
                      {`${area} - ${category}`}
                    </p>
                    <p data-testid={ `${index}-horizontal-done-date` }>{doneDate}</p>
                    <p data-testid={ `${index}-${tags[0]}-horizontal-tag` }>
                      {tags[0]}
                    </p>
                    <p data-testid={ `${index}-${tags[1]}-horizontal-tag` }>
                      {tags[1]}
                    </p>
                  </div>
                </div>)
              : (
                <div key={ id }>
                  <Link to={ `/${type}s/${id}` }>
                    <img
                      src={ image }
                      alt="recipe"
                      data-testid={ `${index}-horizontal-image` }
                    />
                    <p data-testid={ `${index}-horizontal-name` }>{name}</p>
                  </Link>
                  <p data-testid={ `${index}-horizontal-top-text` }>{alcoholicOrNot}</p>
                  <p
                    data-testid={ `${index}-horizontal-done-date` }
                  >
                    {doneDate}

                  </p>
                </div>)
          ),
        )}
    </div>
  );
}

export default RecipesDone;
