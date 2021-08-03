import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import shareIcon from '../images/shareIcon.svg';
import RecipeAppContext from '../context/RecipeAppContext';

const copy = require('clipboard-copy');

function RecipesDone() {
  const [click, setClick] = useState(false);
  const {
    recipesDone,
    setFilteredRecipesDone,
    filteredRecipesDone,
  } = useContext(RecipeAppContext);
  const history = useHistory();

  function copyLink(type, id) {
    copy(`http://localhost:3000/${type}s/${id}`);
    setClick(true);
  }

  const filterRecipesDone = ({ target: { name } }) => {
    let filteredRecipes = [];
    switch (name) {
    case 'Food':
      filteredRecipes = recipesDone.filter((recipe) => recipe.type === 'comida');
      break;
    case 'Drink':
      filteredRecipes = recipesDone.filter((recipe) => recipe.type === 'bebida');
      break;
    default:
      filteredRecipes = recipesDone;
    }
    setFilteredRecipesDone(filteredRecipes);
  };

  return (
    <div>
      <h1>My Recipe Done Page</h1>
      <Header title="Receitas Feitas" />
      <button
        type="button"
        data-testid="filter-by-all-btn"
        name="All"
        onClick={ (e) => filterRecipesDone(e) }
      >
        All
      </button>

      <button
        type="button"
        data-testid="filter-by-food-btn"
        name="Food"
        onClick={ (e) => filterRecipesDone(e) }
      >
        Food
      </button>

      <button
        type="button"
        data-testid="filter-by-drink-btn"
        name="Drink"
        onClick={ (e) => filterRecipesDone(e) }
      >
        Drinks
      </button>
      <span>{click ? <p>Link copiado!</p> : <div />}</span>
      {filteredRecipesDone && filteredRecipesDone.map((recipes, index) => (
        <div key={ index }>
          <input
            type="image"
            data-testid={ `${index}-horizontal-share-btn` }
            src={ shareIcon }
            alt="card da receita"
            onClick={ () => copyLink(recipes.type, recipes.id) }
          />
          <ul>
            <input
              type="image"
              data-testid={ `${index}-horizontal-image` }
              src={ recipes.image }
              width="50px"
              height="50px"
              alt={ recipes.name }
              onClick={ () => history.push(`/${recipes.type}s/${recipes.id}`) }
            />
            <li data-testid={ `${index}-horizontal-top-text` }>
              {`${recipes.area} - ${recipes.category} ${recipes.alcoholicOrNot}`}
            </li>
            <a
              href={ `/${recipes.type}s/${recipes.id}` }
              data-testid={ `${index}-horizontal-name` }
            >
              { recipes.name }
            </a>
            <li data-testid={ `${index}-horizontal-done-date` }>{ recipes.doneDate }</li>
            {recipes.tags && recipes.tags.map((tag, indexTag) => (
              <li
                key={ indexTag }
                data-testid={ `${index}-${tag}-horizontal-tag` }
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default RecipesDone;
