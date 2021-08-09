import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';
import favoriteIcon from '../images/blackHeartIcon.svg';

const copy = require('clipboard-copy');

function RenderFavoriteRecipes() {
  const [copyOk, setCopyOk] = useState(false);
  const [doneRecipes, setDoneRecipes] = useState(
    JSON.parse(localStorage.getItem('favoriteRecipes'))
    || [],
  );
  // const [filterFoodRecipes, setFilterFoodRecipes] = useState(false);
  // const [filterDrinkRecipes, setFilterDrinkRecipes] = useState(false);
  const [filter, setFilter] = useState('todo');
  const [recipesToRender, setRecipesToRendes] = useState([]);

  // function resetFilters() {
  //   setFilterFoodRecipes(false);
  //   setFilterDrinkRecipes(false);
  // }

  function handleClick({ target: { value } }) {
    const filterToUse = filter === value
      ? 'todo'
      : value;
    setFilter(filterToUse);
  }

  // useEffect(() => {
  //   const allDoneRecipes = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
  //   setDoneRecipes(allDoneRecipes);
  //   // setRecipesToRendes(allDoneRecipes);
  // }, []);

  useEffect(() => {
    switch (filter) {
    case 'comida':
      setRecipesToRendes(doneRecipes.filter((recipe) => recipe.type === 'comida'));
      break;
    case 'bebida':
      setRecipesToRendes(doneRecipes.filter((recipe) => recipe.type === 'bebida'));
      break;
    default:
      setRecipesToRendes(doneRecipes);
    }
  }, [filter]);

  // useEffect(() => {
  //   if (filterFoodRecipes || filterDrinkRecipes) {
  //     console.log('Entrou no comidas');
  //     setFilterDrinkRecipes(false);
  //     setRecipesToRendes(doneRecipes.filter((recipe) => recipe.type === 'comida'));
  //   } else if (filterDrinkRecipes) {
  //     console.log('Entrou no bebidas');
  //     setFilterFoodRecipes(false);
  //     setRecipesToRendes(doneRecipes.filter((recipe) => recipe.type === 'bebida'));
  //   } else {
  //     setRecipesToRendes(doneRecipes);
  //   }
  // }, [filterFoodRecipes, filterFoodRecipes]);

  if (recipesToRender.length !== 0) {
    return (
      <div>
        <div>
          <section>
            <button
              type="button"
              data-testid="filter-by-all-btn"
              value="todo"
              onClick={ handleClick }
            >
              All
            </button>
            <button
              type="button"
              data-testid="filter-by-food-btn"
              value="comida"
              onClick={ handleClick }
            >
              Food
            </button>
            <button
              type="button"
              data-testid="filter-by-drink-btn"
              value="bebida"
              onClick={ handleClick }
            >
              Drinks
            </button>
          </section>
          { recipesToRender.map((recipe, index) => (
            <div key={ index }>
              <Link to={ `/${recipe.type}s/${recipe.id}` }>
                <img
                  src={ recipe.image }
                  alt={ recipe.name }
                  data-testid={ `${index}-horizontal-image` }
                  width="50px"
                />
              </Link>
              <p data-testid={ `${index}-horizontal-top-text` }>
                { recipe.type === 'comida'
                  ? `${recipe.area} - ${recipe.category}`
                  : recipe.alcoholicOrNot }
              </p>
              <Link to={ `/${recipe.type}s/${recipe.id}` }>
                <h3 data-testid={ `${index}-horizontal-name` }>{ recipe.name }</h3>
              </Link>
              <button
                type="button"
                onClick={ () => {
                  copy(`http://localhost:3000/${recipe.type}s/${recipe.id}`);
                  setCopyOk(true);
                } }
              >
                <img
                  data-testid={ `${index}-horizontal-share-btn` }
                  src={ shareIcon }
                  alt="share"
                />
              </button>
              <button
                type="button"
                // onClick={ () => removeFromStorage(recipe) } IMPLEMENTAR
              >
                <img
                  src={ favoriteIcon }
                  data-testid={ `${index}-horizontal-favorite-btn` }
                  alt="share"
                />
              </button>
              { copyOk && <p>Link copiado!</p> }
            </div>
          ))}
        </div>
      </div>
    );
  }
  return <p>Ainda não existem receitas favoritadas!</p>;
}

export default RenderFavoriteRecipes;
